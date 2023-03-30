import Image from "next/image";
import ContentBox from "../ContentBox";
import ChennaiSkyline from "assets/chennaiSkyline.svg";

const AboutSection = () => {
  return (
    <div className="min-h-screen pt-24" id="about">
      <ContentBox title="About us" color="selectiveyellow">
        <p className="text-black/75 text-xl md:text-2xl lg:text-3xl leading-10 min-h-[360px] flex items-center">
          GDSC Wonder of Wonders is an astronomical, country-wide, in-person,
          annual, student-centric technical fest maneuvered by 400+ GDSCs and
          200+ colleges with over 20K events each year all over India.
        </p>
        <Image
          src={ChennaiSkyline}
          alt=""
          className="absolute -bottom-2 scale-105"
        />
      </ContentBox>
    </div>
  );
};

export default AboutSection;
