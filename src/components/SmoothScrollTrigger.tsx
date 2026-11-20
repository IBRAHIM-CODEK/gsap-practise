import { useGSAP } from "@gsap/react";
import "./../App.css";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
const SmoothScrollTrigger = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    ScrollTrigger.create({
      trigger: ".box",
      start: "center center",
      end: "+=300",
      markers: true,
    });
  }, []);

  return (
    <div className="pattern-background">
      <div className="w-screen h-screen flex flex-col items-center gap-10">
        <div
          data-speed="0.8"
          className="w-80 h-80 rounded-2xl bg-linear-60 from-purple-500 to-pink-500"
        ></div>
      </div>
      <div className="w-screen h-screen flex items-center justify-between gap-4">
        <div
          data-speed="clamp(0.6)"
          className=" w-80 h-80 rounded-2xl bg-linear-60 from-red-500 to-green-500"
        ></div>
        <div
          data-lag="0.5"
          className=" w-80 h-80 rounded-2xl bg-linear-60 from-orange-500 to-yellow-500"
        ></div>
      </div>
    </div>
  );
};

export default SmoothScrollTrigger;
