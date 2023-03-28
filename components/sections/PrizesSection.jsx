import ContentBox from "../ContentBox";

const PrizesSection = () => {
  return (
    <div className="min-h-screen pt-24" id="prizes">
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
