import { Hero } from "../components/Fragments/Hero";
import { Navbar } from "../components/Fragments/Navbar";
import { NameHero } from "../components/Elements/Title/NameHero";
import { FirstLayout } from "../components/Layouts/FirstLayout";
import { MyContext } from "../context/MyContext";
import { useContext } from "react";

export const HerosPage = () => {
  const context = useContext(MyContext);

  return (
    <FirstLayout
      navbar={<Navbar />}
      classname="bg-background h-screen grid-rows-[1fr_1.5fr] md:grid-rows-1 md:grid-cols-2 dark:bg-darkbackground"
      ref={context.homeRef}
    >
      <NameHero />
      <Hero />
    </FirstLayout>
  );
};
