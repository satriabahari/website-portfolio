import Description from "../components/Elements/Text/Description";
import Title from "../components/Elements/Text/Title";
import CardPortfolio from "../components/Fragments/CardPorfolio";
import FirstLayout from "../components/Layouts/FirstLayout";
import { MyContext } from "../context/MyContext";
import { useContext } from "react";

export const Portfolio = () => {
  const context = useContext(MyContext);

  return (
    <FirstLayout
      classname={"bg-background grid-rows-[35%_65%] gap-4 h-screen"}
      ref={context.portfolioRef}
    >
      <div className="text-center text-white flex flex-col justify-center items-center mt-14">
        <Title classname=" text-4xl text-primary">My Portfolio</Title>
        <span className="w-1/5 bg-neutral h-[0.5px] my-6"></span>
        <Description classname="w-2/3 text-lg text-neutral">
          Begin with your repository, or start with a template. Our tooling
          extends your app with plugins and variable management so environments
          are the same live as local.
        </Description>
      </div>
      <div className=" grid grid-cols-2 w-full mb-12 gap-4">
        <CardPortfolio />
      </div>
    </FirstLayout>
  );
};
