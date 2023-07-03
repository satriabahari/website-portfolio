import NameAbout from "../components/Elements/Title/NameAbout";
import About from "../components/Fragments/About";
import FirstLayout from "../components/Layouts/FirstLayout";
import { MyContext } from "../context/MyContext";
import { useContext } from "react";

export const AboutPage = () => {
  const context = useContext(MyContext);

  return (
    <FirstLayout classname={"bg-background grid-cols-2"} ref={context.aboutRef}>
      <About />
      <NameAbout />
    </FirstLayout>
  );
};
