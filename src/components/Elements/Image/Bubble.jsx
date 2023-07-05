import { motion } from "framer-motion";
import { useContext } from "react";
import { MyContext } from "../../../context/MyContext"

export const Bubble = ({ classname, variants, initial, animate, width }) => {
  const context = useContext(MyContext)
  return (
    <motion.div
      variants={variants}
      initial={initial}
      animate={animate}
      className={`absolute z-10 hidden md:block ${classname}`}
    >
      <img
        src={
          context.theme === "light"
          ? "/images/bubble.png"
          : "/images/bubble-blue.png"
          }
        alt="Bubble Image"
        width={width}
      />
    </motion.div>
  );
};
