import ContentBox from "../ContentBox";
import bottomLeft from "../../assets/icon.png";
import Image from "next/image";

const PrizesSection = () => {
  return (
    <div className="min-h-screen pt-24" id="prizes">
      <div className="absolute md:-bottom-[53rem] -left-14">
        <Image src={bottomLeft} alt="" className="w-32 opacity-30" />
      </div>
      <ContentBox
        title="Prizes"
        content={
          "We are excited to announce that we will be giving out prizes to the top 3 teams in each category. The prizes are as follows:"
        }
        color="darkgreen"
      />
    </div>
  );
};

export default PrizesSection;
