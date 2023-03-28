const ContentBox = ({ title, content, color = "neutral" }) => {
  return (
    <div
      className={`min-h-[520px] mx-24 bg-gradient-to-t from-${color}/75 via-${color}/10 to-white px-8 rounded-3xl`}
    >
      {/* Backdrop text below */}
      <span
        className={`font-serif font-medium text-${color}/20 text-8xl absolute -translate-y-1/2`}
      >
        {title}
      </span>
      <h1 className={`text-5xl font-semibold text-${color} mb-12`}>{title}</h1>
      <p className={`text-3xl leading-10`}>{content}</p>
    </div>
  );
};

export default ContentBox;
