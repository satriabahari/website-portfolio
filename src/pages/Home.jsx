import Hero from "../components/Fragments/Hero";
import Navbar from "../components/Fragments/Navbar";
import NameHero from "../components/Elements/Title/NameHero";
import FirstLayout from "../components/Layouts/FirstLayout";

const HerosPage = () => {
  return (
    <FirstLayout navbar={<Navbar />} classname={"bg-background grid-cols-2"}>
      <NameHero />
      <Hero />
    </FirstLayout>
  );
};

export default HerosPage;
