import { motion } from "framer-motion";

export const Bubble = ({ classname, variants, initial, animate, width }) => {
  return (
    <motion.div
      variants={variants}
      initial={initial}
      animate={animate}
      className={`absolute z-10 hidden md:block ${classname}`}
    >
      <img
        src="../../../images/bubble.png"
        alt="Bubble Image"
        width={width}
      />
    </motion.div>
  );
};
