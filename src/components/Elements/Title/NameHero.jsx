import Button from "../Button/Button";
import { FaArrowRight } from "react-icons/fa";
import Description from "../Text/Description";
import Title from "../Text/Title";
import Type from "../Text/TypeAnimation";

const NameHero = () => {
  return (
    <div className="w-full my-auto">
      <Title classname="text-6xl mb-2 text-primary">Hello! I'm Satria,</Title>
      <Type />
      <Description classname="mb-4 text-lg">
        A Front-End Developer with a strong interest in UI/UX Design. Like a
        solving the problem by combining that.
      </Description>
      <Button classname="bg-info text-white bg-primary">
        View About
        <FaArrowRight className="ml-2" />
      </Button>
    </div>
  );
};

export default NameHero;
