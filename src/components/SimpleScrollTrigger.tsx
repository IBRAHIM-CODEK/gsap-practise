import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SimpleScrollTrigger = () => {
  useGSAP(() => {
    gsap.to(".box", {
      rotate: 300,
      duration: 3,
      //   repeat: -1,
      //   yoyo: true,
      ease: "power.inOut",
      scrollTrigger: {
        pin: true,
        trigger: ".box",
        once: true,
        start: "top top",
        end: "+=200",
        scrub: 1,
      },
    });
  });
  return (
    <div className="w-screen h-screen">
      <div className="bg-green-300 w-full h-full flex items-center justify-center  rounded-2xl">
        <div className="w-60 h-60 bg-purple-400 rounded-2xl"></div>
      </div>
      <div className="h-[200vh] w-fit bg-blue-300 flex items-start justify-center gap-20 rounded-2xl">
        <div className="box w-60 h-60 bg-amber-400 rounded-2xl"></div>
        <div className="box w-60 h-60 bg-amber-400 rounded-2xl"></div>
        <div className="box w-60 h-60 bg-amber-400 rounded-2xl"></div>
        <div className="box w-60 h-60 bg-amber-400 rounded-2xl"></div>
        <div className="box w-60 h-60 bg-amber-400 rounded-2xl"></div>
        <div className="box w-60 h-60 bg-amber-400 rounded-2xl"></div>
        <div className="box w-60 h-60 bg-amber-400 rounded-2xl"></div>
        <div className="box w-60 h-60 bg-amber-400 rounded-2xl"></div>
        <div className="box w-60 h-60 bg-amber-400 rounded-2xl"></div>
        <div className="box w-60 h-60 bg-amber-400 rounded-2xl"></div>
        <div className="box w-60 h-60 bg-amber-400 rounded-2xl"></div>
        <div className="box w-60 h-60 bg-amber-400 rounded-2xl"></div>
        <div className="box w-60 h-60 bg-amber-400 rounded-2xl"></div>
      </div>
    </div>
  );
};

export default SimpleScrollTrigger;
