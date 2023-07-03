import { FaArrowRight } from "react-icons/fa";
import Button from "../Button/Button";
import Description from "../Text/Description";
import Title from "../Text/Title";

const NameAbout = () => {
  return (
    <div className="w-full flex flex-col my-auto text-center md:text-start">
      <Title classname="text-4xl md:text-5xl mb-6 text-primary dark:text-white">
        Hello! I'm Satria Bahari
      </Title>
      <Description classname="mb-4 text-md md:text-lg text-neutral dark:text-white">
        A Front-End Developer with a strong interest in UI/UX Design. Like a
        solving the problem by combining that. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Esse explicabo ex cumque officia,
        doloribus sed, delectus vero, veritatis dolor quae ipsum sit qui
        corrupti sequi.
      </Description>
      <Button classname="m-auto md:m-0 bg-info text-white mt-6 w-fit bg-primary dark:bg-white dark:text-primary">
        View Portfolio
        <FaArrowRight className="ml-2" />
      </Button>
    </div>
  );
};

export default NameAbout;
