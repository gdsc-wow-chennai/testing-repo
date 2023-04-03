import Image from "next/image";
import PreloaderGif from "../assets/preloader.gif";

const Preloader = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen">
      <Image src={PreloaderGif} alt="Loading..." />
    </div>
  );
};

export default Preloader;
