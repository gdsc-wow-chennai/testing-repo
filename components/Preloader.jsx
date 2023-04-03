import Image from "next/image";
import PreloaderGif from "../assets/preloader-unscreen.gif";

const Preloader = () => {
  return (
    <div className="flex items-center justify-center w-screen h-full bg-white fixed top-0 left-0 z-9999">
      <Image src={PreloaderGif} alt="Loading..." className="w-1/2"/>
    </div>
  );
};

export default Preloader;
