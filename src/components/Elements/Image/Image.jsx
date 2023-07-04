import { motion } from "framer-motion";

export const Image = ({ src, width, title, classname, variants, aos }) => {
  return (
    <motion.img
      className={`${classname}`}
      src={src}
      alt={title}
      width={width}
      variants={variants}
      initial="hidden"
      animate="visible"
      data-aos={aos}
    />
  );
};
