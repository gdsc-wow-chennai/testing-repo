const ContentBox = ({ title, content, color = "sectiveyellow" }) => {
  // SelectiveYellow ContentBox
  if (color === "selectiveyellow")
    return (
      <div
        className={`min-h-[70vh] mx-12 md:mx-16 lg:mx-24 bg-gradient-to-t from-selectiveyellow/40 to-selectiveyellow/0 px-8 rounded-3xl  border-selectiveyellow`}
      >
        {/* Backdrop text below */}
        <span
          className={`font-serif font-bold text-opacity-0 text-selectiveyellow/10 text-5xl sm:text-6xl md:text-8xl absolute -translate-y-1/2 uppercase -translate-x-5`}
        >
          {title}
        </span>
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl font-semibold -translate-y-1/2 text-selectiveyellow mb-12`}
        >
          {title}
        </h1>
        <p
          className={`text-black/75 text-xl md:text-2xl lg:text-3xl leading-10  min-h-[360px] flex items-center`}
        >
          {content}
        </p>
      </div>
    );
  // RoyalBlue ContentBox
  else if (color === "royalblue")
    return (
      <div
        className={`min-h-[70vh] mx-12 md:mx-16 lg:mx-24 bg-gradient-to-t from-royalblue/40 to-royalblue/0 px-8 rounded-3xl  border-royalblue`}
      >
        {/* Backdrop text below */}
        <span
          className={`font-serif font-bold text-opacity-0 text-royalblue/10 text-5xl sm:text-6xl md:text-8xl absolute -translate-y-1/2 uppercase -translate-x-5`}
        >
          {title}
        </span>
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl font-semibold -translate-y-1/2 text-royalblue mb-12`}
        >
          {title}
        </h1>
        <p
          className={`text-black/75 text-xl md:text-2xl lg:text-3xl leading-10  min-h-[360px] flex items-center`}
        >
          {content}
        </p>
      </div>
    );
  // BrightRed ContentBox
  else if (color === "brightred")
    return (
      <div
        className={`min-h-[70vh] mx-12 md:mx-16 lg:mx-24 bg-gradient-to-t from-brightred/40 to-brightred/0 px-8 rounded-3xl  border-brightred`}
      >
        {/* Backdrop text below */}
        <span
          className={`font-serif font-bold text-opacity-0 text-brightred/10 text-5xl sm:text-6xl md:text-8xl absolute -translate-y-1/2 uppercase -translate-x-5`}
        >
          {title}
        </span>
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl font-semibold -translate-y-1/2 text-brightred mb-12`}
        >
          {title}
        </h1>
        <p
          className={`text-black/75 text-xl md:text-2xl lg:text-3xl leading-10  min-h-[360px] flex items-center`}
        >
          {content}
        </p>
      </div>
    );
  // DarkGreen ContentBox
  else if (color === "darkgreen")
    return (
      <div
        className={`min-h-[70vh] mx-12 md:mx-16 lg:mx-24 bg-gradient-to-t from-darkgreen/40 to-darkgreen/0 px-8 rounded-3xl  border-darkgreen`}
      >
        {/* Backdrop text below */}
        <span
          className={`font-serif font-bold text-opacity-0 text-darkgreen/10 text-5xl sm:text-6xl md:text-8xl absolute -translate-y-1/2 uppercase -translate-x-5`}
        >
          {title}
        </span>
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl font-semibold -translate-y-1/2 text-darkgreen mb-12`}
        >
          {title}
        </h1>
        <p
          className={`text-black/75 text-xl md:text-2xl lg:text-3xl leading-10  min-h-[360px] flex items-center`}
        >
          {content}
        </p>
      </div>
    );
};

export default ContentBox;
