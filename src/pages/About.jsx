import { NameAbout } from "../components/Elements/Title/NameAbout";
import { About } from "../components/Fragments/About";
import { FirstLayout } from "../components/Layouts/FirstLayout";
import { MyContext } from "../context/MyContext";
import { useContext } from "react";

export const AboutPage = () => {
  const context = useContext(MyContext);

  return (
    <FirstLayout
      classname={
        "bg-background h-screen grid-rows-2 md:grid-rows-1 md:grid-cols-2 dark:bg-primary"
      }
      ref={context.aboutRef}
    >
      <About />
      <NameAbout />
    </FirstLayout>
  );
};
