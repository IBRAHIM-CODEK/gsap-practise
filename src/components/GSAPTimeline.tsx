import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const GSAPTimeline = () => {
  gsap.registerPlugin(useGSAP);
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.fromTo(
      ".box1",
      {
        opacity: 0,
        x: -300,
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        onStart: () => {
          console.log("first animation started!");
        },
        onComplete: () => {
          console.log("first animation completed!");
        },
      },
    );
    tl.to(".box2", {
      opacity: 1,
      duration: 3,
      onStart: () => {
        console.log("second animation started!");
      },
      onComplete: () => {
        console.log("second animation completed!");
      },
    });
    tl.fromTo(
      ".circle",
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 3,
        onStart: () => {
          console.log("last animation started!");
        },
        onComplete: () => {
          console.log("last animation completed!");
        },
      },
    );
  });
  return (
    <div className="h-screen w-screen border-5 border-red-500 rounded-xl">
      <div className="box box1 w-40 h-40 rounded-xl bg-amber-300"></div>
      <div className="box box2 w-40 h-40 rounded-xl bg-green-300 opacity-0"></div>
      <div className="box circle w-40 h-40 rounded-full bg-blue-300"></div>
      <button
        onClick={() => tl.pause()}
        className="border boder-green-600 text-green-600 px-2 py-2 rounded-2xl cursor-pointer hover:border-0 hover:bg-green-600 hover:text-white"
      >
        Pause Animation
      </button>
      <button
        onClick={() => tl.resume()}
        className="border boder-purple-600 text-purple-600 px-2 py-2 rounded-2xl cursor-pointer hover:border-0 hover:bg-purple-600 hover:text-white"
      >
        Resume Animation
      </button>
    </div>
  );
};

export default GSAPTimeline;
