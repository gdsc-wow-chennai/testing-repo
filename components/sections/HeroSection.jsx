import logo from "../../assets/logo.png";
import sideImage from "../../assets/image.svg";
import Image from "next/image";
import SideImages from "../SideImages";

const HeroSection = () => {
  return (
    <div className="min-h-screen pt-24" id="hero">
      <SideImages />
      <div className="flex gap-10 m-20 items-center justify-between h-full">
        <div className="w-1/2"> 
          <Image src={logo} alt="WoW Chennai Logo" className="w-[90%]" />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Image src={sideImage} alt="WoW Chennai Animation" className="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
