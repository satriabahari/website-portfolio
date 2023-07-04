import { motion } from "framer-motion";

export const Bubble = ({ classname, variants, initial, animate, width }) => {
  return (
    <motion.div
      variants={variants}
      initial={initial}
      animate={animate}
      className={`absolute z-10 ${classname}`}
    >
      <img
        src="../../../public/images/entah.png"
        alt="Bubble Image"
        width={width}
      />
    </motion.div>
  );
};
