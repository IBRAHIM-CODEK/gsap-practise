import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function App() {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {});
  return (
    <div className="h-screen w-screen">
      <div className="w-10 h-10 rounded-xl bg-amber-300"></div>
      <div className="w-10 h-10 rounded-xl bg-green-300"></div>
    </div>
  );
}

export default App;
