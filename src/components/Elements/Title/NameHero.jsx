import { Button } from "../Button/Button";
import { FaArrowRight } from "react-icons/fa";
import { Description } from "../Text/Description";
import { Title } from "../Text/Title";
import { Type } from "../Text/TypeAnimation";
import { motion } from "framer-motion";

const animationVariant = {
  hidden: {
    x: -100, // Move the element 100 pixels to the left
    opacity: 0,
  },
  visible: {
    x: 0, // Move the element back to its original position
    opacity: 1,
    transition: {
      duration: 1, // Animation duration in seconds
    },
  },
};

export const NameHero = () => {
  return (
    <motion.div
      className="w-full my-auto text-center md:text-start"
      variants={animationVariant}
      initial="hidden" // Set initial animation state to hidden
      animate="visible" // Trigger animation to visible state
    >
      <Title classname="text-6xl mb-2 text-primary dark:text-white">
        Hello! I'm Satria,
      </Title>
      <Type />
      <Description classname="mb-4 text-lg text-neutral dark:text-white">
        A Front-End Developer with a strong interest in UI/UX Design. Like a
        solving the problem by combining that.
      </Description>
      <Button classname="m-auto md:m-0 text-white bg-primary dark:bg-white dark:text-primary">
        View About
        <FaArrowRight className="ml-2" />
      </Button>
    </motion.div>
  );
};
