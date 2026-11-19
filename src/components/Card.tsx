import { useGSAP } from "@gsap/react";
import Picture from "../../public/12446dfcf778a18bfe31f402dcb46eef_imgupscaler.ai_Upscaler_2K.png";
import gsap from "gsap";
import { useRef } from "react";

const Card = () => {
  const imgTween = useRef<gsap.core.Tween | null>(null);
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    imgTween.current = gsap.to(".image", {
      opacity: 1,
      duration: 1,
      paused: true,
    });
  });
  return (
    <div className="shadow-2xl p-3 w-80 rounded-2xl">
      <div className="flex flex-col gap-4 justify-center">
        <div className="w-full h-80 bg-gray-600 rounded-2xl">
          <img
            ref={imgTween}
            src={Picture}
            alt="picture"
            onMouseEnter={() => imgTween.current?.play()}
            onMouseLeave={() => imgTween.current?.reverse()}
            className="image h-full w-full object-center object-cover opacity-0 rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <h1 className="text-3xl font-bold">Cowboy Bebop</h1>
          <h2 className="text-lg">Popular Anime of the 90s</h2>
        </div>
        <p className="text-sm">
          a stylish neo-noir space Western anime following a ragtag crew of bounty hunters chasing
          criminals across a gritty solar system in 2071
        </p>
        <div className="flex items-center justify-around gap-3">
          <button className="bg-gray-400 text-2xl text-white rounded-2xl px-4 py-2">
            secondary
          </button>
          <button className="bg-black text-2xl text-white rounded-2xl px-4 py-2">primary</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
