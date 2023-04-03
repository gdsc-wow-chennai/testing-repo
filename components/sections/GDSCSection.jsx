import ContentBox from "../ContentBox";
import bottomLeft from "../../assets/icon.png";
import Image from "next/image";

const GDSCSection = () => {
  return (
    <div className="min-h-screen pt-14 md:pt-24 " id="gdsc">
      <div className="absolute -translate-y-32 md:translate-y-[130rem] md:-bottom-[53rem] -left-14">
        <Image src={bottomLeft} alt="" className="w-28 md:w-32 opacity-30" />
      </div>
      <ContentBox title={"GDSCs"} color="selectiveyellow" backdrop="Organizers">
        <ul className="text-black/75 text-xl md:text-2xl lg:text-3xl leading-10">
          <li>VIT Chennai</li>
          <li>Chennai Institute of Technology</li>
          <li>SRM, Ramapuram</li>
          <li>VELTech</li>
          <li>NIT Trichi</li>
          <li>PSG Tech, Chennai</li>
        </ul>
      </ContentBox>
    </div>
  );
};

export default GDSCSection;
