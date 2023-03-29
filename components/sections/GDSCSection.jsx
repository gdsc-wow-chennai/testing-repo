import ContentBox from "../ContentBox";

const GDSCSection = () => {
  return (
    <div className="min-h-screen pt-24" id="gdsc">
      <ContentBox
        title={"GDSCs"}
        content={
          <ul>
            <li>VIT Chennai</li>
            <li>Chennai Institute of Technology</li>
            <li>SRM, Ramapuram</li>
            <li>VELTech</li>
            <li>NIT Trichi</li>
            <li>PSG Tech, Chennai</li>
          </ul>
        }
        color="selectiveyellow"
        backdrop="Organizers"
      />
    </div>
  );
};

export default GDSCSection;
