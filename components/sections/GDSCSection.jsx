import ContentBox from "../ContentBox";

const GDSCSection = () => {
  return (
    <div className="min-h-screen pt-24" id="gdsc">
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
