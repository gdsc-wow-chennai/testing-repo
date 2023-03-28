const ContentBox = ({ title, content, color = "sectiveyellow" }) => {
  if (color === "selectiveyellow")
    return (
      <div
        className={`min-h-[520px] mx-24 bg-gradient-to-t from-selectiveyellow/75 via-selectiveyellow/10 to-white px-8 rounded-3xl border border-opacity-25 border-selectiveyellow`}
      >
        {/* Backdrop text below */}
        <span
          className={`font-serif font-medium text-selectiveyellow/20 text-8xl absolute -translate-y-1/2`}
        >
          {title}
        </span>
        <h1 className={`text-5xl font-semibold text-selectiveyellow mb-12`}>
          {title}
        </h1>
        <p className={`text-3xl leading-10`}>{content}</p>
      </div>
    );
  else if (color === "royalblue")
    return (
      <div
        className={`min-h-[520px] mx-24 bg-gradient-to-t from-royalblue/75 via-royalblue/10 to-white px-8 rounded-3xl border border-opacity-25 border-royalblue`}
      >
        {/* Backdrop text below */}
        <span
          className={`font-serif font-medium text-royalblue/20 text-8xl absolute -translate-y-1/2`}
        >
          {title}
        </span>
        <h1 className={`text-5xl font-semibold text-royalblue mb-12`}>
          {title}
        </h1>
        <p className={`text-3xl leading-10`}>{content}</p>
      </div>
    );
  else if (color === "brightred")
    return (
      <div
        className={`min-h-[520px] mx-24 bg-gradient-to-t from-brightred/75 via-brightred/10 to-white px-8 rounded-3xl border border-opacity-25 border-brightred`}
      >
        {/* Backdrop text below */}
        <span
          className={`font-serif font-medium text-brightred/20 text-8xl absolute -translate-y-1/2`}
        >
          {title}
        </span>
        <h1 className={`text-5xl font-semibold text-brightred mb-12`}>
          {title}
        </h1>
        <p className={`text-3xl leading-10`}>{content}</p>
      </div>
    );
  else if (color === "darkgreen")
    return (
      <div
        className={`min-h-[520px] mx-24 bg-gradient-to-t from-darkgreen/75 via-darkgreen/10 to-white px-8 rounded-3xl border border-opacity-25 border-darkgreen`}
      >
        {/* Backdrop text below */}
        <span
          className={`font-serif font-medium text-darkgreen/20 text-8xl absolute -translate-y-1/2`}
        >
          {title}
        </span>
        <h1 className={`text-5xl font-semibold text-darkgreen mb-12`}>
          {title}
        </h1>
        <p className={`text-3xl leading-10`}>{content}</p>
      </div>
    );
};

export default ContentBox;
