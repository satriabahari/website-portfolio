import NameAbout from "../components/Elements/Title/NameAbout";
import About from "../components/Fragments/About";
import FirstLayout from "../components/Layouts/FirstLayout";

const AboutPage = () => {
  return (
    <FirstLayout classname={"bg-background grid-cols-2"}>
      <About />
      <NameAbout />
    </FirstLayout>
  );
};

export default AboutPage;
