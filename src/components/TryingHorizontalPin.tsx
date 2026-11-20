import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Img1 from "../../public/img-1.jpg";
import Img2 from "../../public/img-2.jpg";
import Img3 from "../../public/img-3.jpg";
import Img4 from "../../public/img-4.png";
import Img5 from "../../public/img-5.jpg";
import Img6 from "../../public/img-6.jpg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const images = [
  { src: Img1, alt: "img1", cls: "img1" },
  { src: Img2, alt: "img2", cls: "img2" },
  { src: Img3, alt: "img3", cls: "img3" },
  { src: Img4, alt: "img4", cls: "img4" },
  { src: Img5, alt: "img5", cls: "img5" },
  { src: Img6, alt: "img6", cls: "img6" },
];

const TryingHorizontalPin = () => {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(
    () => {
      const getDistance = () => trackRef.current.scrollWidth - viewportRef.current.clientWidth;

      // One hover animation PER card
      gsap.utils.toArray(".card").forEach((card) => {
        const reveal = card.querySelector(".text-reveal");

        gsap.set(reveal, { yPercent: 100 });
        const tween = gsap.to(reveal, {
          yPercent: 0,
          duration: 0.2,
          ease: "power1.inOut",
          paused: true,
        });

        card.addEventListener("mouseenter", () => tween.play());
        card.addEventListener("mouseleave", () => tween.reverse());
      });

      // Horizontal scroll
      const scrollTween = gsap.to(trackRef.current, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => "+=" + getDistance(),
          invalidateOnRefresh: true,
        },
      });

      // Scale each image up as it moves into view
      images.forEach(({ cls }) => {
        gsap.to(`.${cls}`, {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: `.${cls}`,
            containerAnimation: scrollTween,
            start: "left 90%",
            end: "left 40%",
            scrub: true,
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <>
      <div className="w-full h-screen bg-gray-950"></div>

      <div
        ref={sectionRef}
        className="w-full h-screen flex items-center justify-center bg-blue-200"
      >
        <div
          ref={viewportRef}
          className="bg-orange-200 rounded-2xl w-[90%] h-[90%] overflow-hidden"
        >
          <div ref={trackRef} className="flex items-center gap-20 h-full w-max px-10">
            {images.map(({ src, alt, cls }) => (
              <div key={cls} className={`${cls} scale-50 w-200 relative`}>
                <div className="card relative overflow-hidden rounded-2xl">
                  <img src={src} alt={alt} className="w-full" />
                  <div className="text-reveal absolute bottom-0 inset-x-0 p-4 text-white bg-linear-to-t from-black to-transparent">
                    <h1 className="text-3xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, suscipit
                      assumenda commodi rerum veritatis eaque ratione laborum,
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-screen bg-gray-950"></div>
    </>
  );
};

export default TryingHorizontalPin;
