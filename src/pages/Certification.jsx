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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          aliquid rerum eos magni cum consequatur commodi repellat, earum
          voluptatem non saepe debitis suscipit harum ipsam.
        </Description>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 ">
        <CardCertification />
      </div>
    </FirstLayout>
  );
};
