import { useContext } from "react";
import {Menu} from "./Menu";
import { MyContext } from "../../../context/MyContext";

export const Menus = () => {
  const context = useContext(MyContext);

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul className="flex border border-primary py-1 px-3 rounded-full">
      <Menu onClick={() => handleClick(context.homeRef)}>Home</Menu>
      <Menu onClick={() => handleClick(context.aboutRef)}>About</Menu>
      <Menu onClick={() => handleClick(context.skillRef)}>Skills</Menu>
      {/* <Menu onClick={() => handleClick(context.portfolioRef)}>Portfolio</Menu> */}
    </ul>
  );
};

