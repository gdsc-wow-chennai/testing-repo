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
      <div className="flex flex-col items-center justify-center  md:-space-y-16 h-screen ">
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 m-10 md:m-20 items-center justify-center md:justify-between h-full">
          <div className="md:w-1/2">
            <Image src={logo} alt="WoW Chennai Logo" className="md:w-[90%]" />
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <Image src={sideImage} alt="WoW Chennai Animation" className="" />
          </div>
        </div>

        <div className="flex items-center justify-center flex-col gap-6 w-full">
          <h1 className="tagline text-lg md:text-2xl font-semibold text-center min-w-fit">
            South India’s premier student networking event
          </h1>
          <a
            className="text-sm md:text-lg bg-[#4285F4] px-8 py-3 md:px-10 md:py-3 hover:shadow-2xl transition-all duration-500 font-light rounded-full text-white"
            href="#"
          >
            Register Now
          </a>

          <div className="flex items-center justify-center w-full ">
            {/* <div class="icon-scroll "></div> */}

            <Image src={mouseScroll} alt="" className="w-10 md:w-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
