import { useContext } from "react";
import { Menu } from "./Menu";
import { MyContext } from "../../../context/MyContext";

export const Menus = ({hidden, classname}) => {
  const context = useContext(MyContext);

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={hidden}>
      <ul className={classname}>
        <Menu onClick={() => handleClick(context.aboutRef)}>About</Menu>
        <Menu onClick={() => handleClick(context.skillRef)}>Skills</Menu>
        <Menu onClick={() => handleClick(context.certificationRef)}>
          Certification
        </Menu>
        {/* <Menu onClick={() => handleClick(context.portfolioRef)}>Portfolio</Menu> */}
        <Menu onClick={() => handleClick(context.contactRef)}>Contact</Menu>
      </ul>
    </div>
  );
};
