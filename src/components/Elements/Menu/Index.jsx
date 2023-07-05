import { useContext } from "react";
import { Menu } from "./Menu";
import { MyContext } from "../../../context/MyContext";

export const Menus = () => {
  const context = useContext(MyContext);

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul className="flex rounded-full border border-primary px-3 py-1 dark:border-darkprimary">
      <Menu onClick={() => handleClick(context.aboutRef)}>About</Menu>
      <Menu onClick={() => handleClick(context.skillRef)}>Skills</Menu>
      <Menu onClick={() => handleClick(context.certificationRef)}>Certification</Menu>
      <Menu onClick={() => handleClick(context.contactRef)}>Contact</Menu>
      {/* <Menu onClick={() => handleClick(context.portfolioRef)}>Portfolio</Menu> */}
    </ul>
  );
};
