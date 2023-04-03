import ContentBox from "../ContentBox";
import bottomLeft from "../../assets/icon.png";
import Image from "next/image";

const QuestionsSection = () => {
  return (
    <div className="min-h-screen pt-14 md:pt-24 " id="questions">
      <div className="absolute -translate-y-32 md:translate-y-96 md:-bottom-[53rem] -left-14">
        <Image src={bottomLeft} alt="" className="w-28 md:w-32 opacity-30" />
      </div>
      <ContentBox
        title="Questions"
        content={
          "If you have any questions, please reach out to us at [email protected] or join our Discord server."
        }
        color="darkgreen"
        backdrop={"faqs"}
      />
    </div>
  );
};

export default QuestionsSection;
