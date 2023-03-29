import logo from "../../assets/logo.png";
import sideImage from "../../assets/image.svg";
import Image from "next/image";
import SideImages from "../SideImages";
import mouseScroll from "../../assets/mouse-scroll.gif";
import Icon from "../Icon";
import bottomLeft from "../../assets/icon.png";

const HeroSection = () => {
  return (
    <div className="min-h-screen " id="hero">
      {/* <Icon /> */}
      <SideImages />
      <div className="absolute -bottom-10 -left-14">
        <Image src={bottomLeft} alt="" className="w-32 opacity-30" />
      </div>
      ;
      <div className="flex flex-col items-center justify-center -space-y-16 ">
        <div className="flex gap-10 m-20 items-center justify-between h-full">
          <div className="w-1/2">
            <Image src={logo} alt="WoW Chennai Logo" className="w-[90%]" />
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <Image src={sideImage} alt="WoW Chennai Animation" className="" />
          </div>
        </div>

        <div className="flex items-center justify-center flex-col gap-6 w-full">
          <h1 className="tagline text-2xl font-semibold text-center text-[#4285F4]">
            South India’s premier student networking event
          </h1>
          <a
            className=" text-lg bg-[#4285F4] px-10 py-3 hover:shadow-2xl transition-all duration-500 font-light rounded-full text-white"
            href="#"
          >
            Register Now
          </a>

          <div className="flex items-center justify-center w-full ">
            {/* <div class="icon-scroll "></div> */}

            <Image src={mouseScroll} alt="" className="w-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
