import ContentBox from "../ContentBox";

const QuestionsSection = () => {
  return (
    <div className="min-h-screen pt-24" id="questions">
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
