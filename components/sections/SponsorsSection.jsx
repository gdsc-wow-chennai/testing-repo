import ContentBox from "../ContentBox";

const SponsorsSection = () => {
  return (
    <div className="min-h-screen pt-24" id="sponsors">
      <ContentBox
        title="Sponsors"
        content={
          "GDSC Wonder of Wonders is an astronomical, country-wide, in-person, annual, student-centric technical fest maneuvered by 400+ GDSCs and 200+ colleges with over 20K events each year all over India."
        }
        color="royalblue"
      />
    </div>
  );
};

export default SponsorsSection;
