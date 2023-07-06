import React from "react";
import { Menus } from "./Index";
import { motion } from "framer-motion";

export const Pop = ({ initial, animate }) => {
  return (
    <motion.div
      className="fixed right-0 top-[47px] z-50 block h-auto w-36 border-b border-l border-primary bg-background py-2 md:hidden"
      initial={initial}
      animate={animate}
    >
      <Menus hidden="block md:hidden" classname="space-y-4" />
    </motion.div>
  );
};
