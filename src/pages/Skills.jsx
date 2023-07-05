import Aos from "aos";
import { Description } from "../components/Elements/Text/Description";
import { Title } from "../components/Elements/Text/Title";
import { CardSkills } from "../components/Fragments/CardSkills";
import { FirstLayout } from "../components/Layouts/FirstLayout";
import { MyContext } from "../context/MyContext";
import { useContext, useEffect } from "react";

export const SkillsPage = () => {
  const context = useContext(MyContext);

  // useEffect(() => {
  //   Aos.init({duration: 1200})
  // })

  return (
    <FirstLayout
      classname="bg-background dark:bg-darkbackground grid-rows-[0.7fr_auto] md:grid-rows-[35%_65%] gap-4 h-auto md:h-screen md:pb-8"
      ref={context.skillRef}
    >
      <div
        className="mt-8 flex flex-col items-center justify-center text-center text-white "
        data-aos="fade-down"
        data-aos-offset="100"
      >
        <Title classname=" text-4xl md:text-5xl text-primary dark:text-white">Skills</Title>
        <span className="my-6 h-[0.5px] w-1/2 bg-neutral dark:bg-white md:w-1/5"></span>
        <Description classname="w-full md:w-2/3 text-lg text-neutral dark:text-darkneutral">
          Begin with your repository, or start with a template. Our tooling
          extends your app with plugins and variable management so environments
          are the same live as local.
        </Description>
      </div>
      <div className=" grid w-full grid-cols-2 gap-2 lg:grid-cols-4">
        <CardSkills />
      </div>
    </FirstLayout>
  );
};
