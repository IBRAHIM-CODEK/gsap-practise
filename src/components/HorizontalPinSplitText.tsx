import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const HorizontalPinSplitText = () => {
  const section = useRef(null);

  useGSAP(() => {
    const split = SplitText.create(".t", { type: "words" });

    gsap.to(split.words, {
      color: "black",
      ease: "none",
      stagger: 0.1,
      scrollTrigger: {
        trigger: section.current,
        pin: true,
        scrub: true,
        start: "top top",
        end: "+=100%",
      },
    });
  });

  return (
    <>
      <div className="w-full h-screen bg-black"></div>

      <div ref={section} className="w-full h-screen p-5 flex items-center justify-center">
        <h1 className="t text-3xl text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque amet vel ducimus
          voluptatum, eius ipsa blanditiis deleniti in, quas iusto et quam magnam ab est cum, eos
          nostrum accusamus maiores.
        </h1>
      </div>

      {/* Room after the pin releases */}
      <div className="w-full h-screen bg-black"></div>
    </>
  );
};

export default HorizontalPinSplitText;
