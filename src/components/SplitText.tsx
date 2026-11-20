import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

const SplitTextComp = () => {
  gsap.registerPlugin(SplitText, useGSAP, ScrollTrigger);
  useGSAP(() => {
    const split1 = SplitText.create(".t1", {
      type: "words",
    });
    const split2 = SplitText.create(".t2", {
      type: "words",
    });
    gsap.fromTo(
      split1.words,
      {
        opacity: 0,
        y: -100,
        rotate: "random(-30, 30)",
      },
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        duration: 1,
        ease: "elastic.out",
        stagger: 0.05,
      },
    );
    gsap.fromTo(
      split2.words,
      {
        opacity: 0,
        y: -100,
        rotate: "random(-30, 30)",
      },
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        duration: 1,
        ease: "elastic.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".box2",
          start: "top 80%",
          end: "bottom 80%",
          scrub: 1,
          markers: true,
        },
      },
    );
    gsap.fromTo(
      split2.words,
      {
        opacity: 0,
        y: -100,
        rotate: "random(-30, 30)",
      },
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        duration: 1,
        ease: "elastic.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".box1",
          start: "top 80%",
          end: "bottom 80%",
          scrub: 1,
          markers: true,
        },
      },
    );
    gsap.fromTo(
      ".circle",
      {
        scale: 0,
      },
      {
        scale: 1,
        scrollTrigger: {
          trigger: ".box1",
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
          markers: true,
        },
      },
    );
  });
  return (
    <>
      <div className="p-5 w-screen h-screen">
        <h1 className="text-2xl t1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laboriosam error animi,
          illum nobis reiciendis repellat in, magni rerum ex eaque sapiente cum ipsam, dignissimos
          consequatur sed eum. Repellat, aperiam?
        </h1>
      </div>
      <div className="relative">
        <div className="box1 p-5 w-screen h-screen ">
          <h1 className="text-3xl t2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laboriosam error animi,
            illum nobis reiciendis repellat in, magni rerum ex eaque sapiente cum ipsam, dignissimos
            consequatur sed eum. Repellat, aperiam?
          </h1>
        </div>
        <div className="circle w-screen h-screen absolute rounded-full bg-amber-100 inset-0 z-[-10]"></div>
      </div>
      <div className="box2 p-5 w-screen h-screen ">
        <h1 className="text-3xl t2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laboriosam error animi,
          illum nobis reiciendis repellat in, magni rerum ex eaque sapiente cum ipsam, dignissimos
          consequatur sed eum. Repellat, aperiam?
        </h1>
      </div>
    </>
  );
};

export default SplitTextComp;
