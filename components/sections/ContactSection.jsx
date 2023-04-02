import ContentBox from "../ContentBox";
import bottomLeft from "../../assets/icon.png";
import Image from "next/image";

const ContactSection = () => {
  return (
    <div className="min-h-screen pt-24" id="contact">
      <div className="absolute md:-bottom-[53rem] -left-14">
        <Image src={bottomLeft} alt="" className="w-32 opacity-30" />
      </div>
      <ContentBox
        title="Contact us"
        content={
          "GDSC Wonder of Wonders is an astronomical, country-wide, in-person, annual, student-centric technical fest maneuvered by 400+ GDSCs and 200+ colleges with over 20K events each year all over India."
        }
        color="brightred"
      />
    </div>
  );
};

export default ContactSection;
