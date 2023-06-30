import { FaArrowRight } from "react-icons/fa";
import Button from "../Button/Button";
import Description from "../Text/Description";
import Title from "../Text/Title";

const NameAbout = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <Title classname="text-5xl mb-6 text-primary">
        Hello! I'm Satria Bahari
      </Title>
      <Description classname="mb-4 text-lg text-neutral">
        A Front-End Developer with a strong interest in UI/UX Design. Like a
        solving the problem by combining that. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Esse explicabo ex cumque officia,
        doloribus sed, delectus vero, veritatis dolor quae ipsum sit qui
        corrupti sequi.
      </Description>
      <Button classname="bg-info text-white mt-6 w-fit bg-primary">
        View Portfolio
        <FaArrowRight className="ml-2" />
      </Button>
    </div>
  );
};

export default NameAbout;
