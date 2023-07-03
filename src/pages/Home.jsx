import Hero from "../components/Fragments/Hero";
import Navbar from "../components/Fragments/Navbar";
import NameHero from "../components/Elements/Title/NameHero";
import FirstLayout from "../components/Layouts/FirstLayout";
import { MyContext } from "../context/MyContext";
import { useContext } from "react";

export const HerosPage = () => {
  const context = useContext(MyContext);

  return (
    <FirstLayout
      navbar={<Navbar />}
      classname={"bg-background grid-cols-2"}
      ref={context.homeRef}
    >
      <NameHero />
      <Hero />
    </FirstLayout>
  );
};
