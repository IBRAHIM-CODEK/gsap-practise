import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger, ScrollSmoother);

const HorizontalPinSplitText = () => {
  const section = useRef(null);

  useGSAP(() => {
    const split = SplitText.create(".t", { type: "words" });
    ScrollSmoother.create({
      wrapper: "#wrapper",
      content: "#content",
      smooth: 1,
      effects: true,
    });

    gsap.to(split.words, {
      color: "black",
      ease: "power1.inOut",
      stagger: 0.5,
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
      <div id="wrapper">
        <div id="content">
          <div className="w-full h-screen bg-black z-100"></div>

          <div
            ref={section}
            className="w-full h-screen w-full p-5 flex items-center justify-center relative"
          >
            <div
              className=" opacity-70 h-10 w-10 rounded-full bg-amber-300 absolute inset-x-0 top-10 z-[-10]"
              data-speed="0.2"
            ></div>
            <div
              data-speed="0.6"
              className="opacity-85 h-30 w-30 rounded-full bg-indigo-300 absolute inset-x-0 top-30 z-[-7]"
            ></div>
            <div
              data-speed="0.7"
              className="opacity-95 h-80 w-80 rounded-full bg-green-300 absolute inset-x-0 top-200 z[-1]"
            ></div>
            <h1 className="t text-3xl text-gray-300" data-speed="0.8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque amet vel ducimus
              voluptatum, eius ipsa blanditiis deleniti in, quas iusto et quam magnam ab est cum,
              eos nostrum accusamus maiores.
            </h1>
          </div>

          {/* Room after the pin releases */}
          <div className="w-full h-screen bg-black z-100"></div>
        </div>
      </div>
    </>
  );
};

export default HorizontalPinSplitText;
