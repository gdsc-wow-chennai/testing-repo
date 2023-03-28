import Link from "next/link";

const links = [
  {
    href: "#about",
    text: "About",
  },
  {
    href: "#itinerary",
    text: "Itinerary",
  },
  {
    href: "#sponsors",
    text: "Sponsors",
  },
  {
    href: "#gdsc",
    text: "GDSC",
  },
  {
    href: "#questions",
    text: "FAQ",
  },
  {
    href: "#contact",
    text: "Contact us",
  },
];

const Navbar = () => {
  return (
    <div className="invisible md:visible md:text-xl lg:text-2xl lg:visible z-50 sticky top-1 ml-72 -mr-12 border border-royalblue p-0.5 rounded-2xl shadow-md">
      <div className=" px-6 py-4 flex flex-row justify-around bg-white rounded-2xl">
        {links.map((link, index) => {
          return <NavLink key={index} {...link} />;
        })}
      </div>
    </div>
  );
};

export default Navbar;

const NavLink = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="font-normal hover:underline hover:underline-offset-1 hover:text-blue-500"
    >
      {text}
    </Link>
  );
};
