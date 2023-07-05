import { useContext } from "react";
import { FirstLayout } from "../components/Layouts/FirstLayout";
import { MyContext } from "../context/MyContext";
import { Title } from "../components/Elements/Text/Title";
import { Description } from "../components/Elements/Text/Description";
import { CardCertification } from "../components/Fragments/CardCertification";

export const Certification = () => {
  const context = useContext(MyContext);
  return (
    <FirstLayout
      classname="grid-rows-[0.7fr_auto] md:grid-rows-[35%_65%] gap-4 h-auto md:h-screen md:pb-8  bg-background dark:bg-darkbackground"
      ref={context.certificationRef}
    >
      <div
        className="mt-8 flex flex-col items-center justify-center text-center"
        data-aos="fade-down"
        data-aos-offset="100"
      >
        <Title classname=" text-4xl md:text-5xl text-primary dark:text-white">
          Certification
        </Title>
        <span className="my-6 h-[0.5px] w-1/2 bg-neutral dark:bg-white md:w-1/5"></span>
        <Description classname="w-full md:w-2/3 text-lg text-neutral dark:text-darkneutral">
          Begin with your repository, or start with a template. Our tooling
          extends your app with plugins and variable management so environments
          are the same live as local.
        </Description>
      </div>
      <div className="grid w-full grid-cols-2 gap-6 lg:grid-cols-3">
        <CardCertification />
      </div>
    </FirstLayout>
  );
};
