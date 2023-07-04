import { FaArrowRight } from "react-icons/fa";
import { Button } from "../Button/Button";
import { Description } from "../Text/Description";
import { Title } from "../Text/Title";
import { useEffect } from "react";
import Aos from "aos";

export const NameAbout = () => {
  // useEffect(() => {
  //   Aos.init({duration: 1000})
  // })
  return (
    <div
      className="flex w-full flex-col justify-center text-center md:text-start"
      data-aos="zoom-in"
      data-aos-offset="35"
    >
      <Title classname="text-3xl md:text-5xl mb-6 text-primary dark:text-white">
        Hello! I'm Satria Bahari
      </Title>
      <Description classname="mb-4 text-md md:text-lg text-neutral dark:text-white">
        My name is Satria Bahari, or you can call me Satria. I focus on studying
        web application development and web design. The main programming
        language I'm exploring is Javascript, as well as the React framework
        (and the environment in general). I love learning things, and always
        want to learn new things. I am enthusiastic, reliable, responsible and
        hardworking person. corrupti sequi.
      </Description>
      {/* <Button classname="m-auto md:m-0 bg-info text-white mt-6 w-fit bg-primary dark:bg-white dark:text-primary">
        View Portfolio
        <FaArrowRight className="ml-2" />
      </Button> */}
    </div>
  );
};
