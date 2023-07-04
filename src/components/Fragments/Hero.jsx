import { Bubble } from "../Elements/Image/Bubble";
import { Image } from "../Elements/Image/Image";

const infiniteVariant = {
  hidden: {
    y: 0,
    scale: 0,
  },
  visible: {
    scale: 1,
    y: -10,
    transition: {
      duration: 0.6,
      y: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "reverse",
      },
    },
  },
};

const animateBubble = [
  {
    position: "bottom-1 left-[350px] top-[470px]",
    width: "250",
    initial: {
      scale: 0,
      y: 30,
    },
    animate: {
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        y: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        },
      },
    },
  },
  {
    position: "bottom-1 right-[410px] top-[450px]",
    width: "300",
    initial: {
      scale: 0,
      y: 30,
    },
    animate: {
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        y: {
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        },
      },
    },
  },
  {
    position: "bottom-1 right-[450px] top-[70px]",
    width: "250",
    initial: {
      scale: 0,
      y: 30,
    },
    animate: {
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        y: {
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        },
      },
    },
  },
  {
    position: "bottom-1 left-[450px] top-[60px]",
    width: "250",
    initial: {
      scale: 0,
      y: 30,
    },
    animate: {
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        y: {
          duration: 0.9,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        },
      },
    },
  },
];

export const Hero = () => {
  return (
    <div className="relative flex h-auto items-center justify-center">
      <Image
        classname="z-20 "
        src="../../../public/images/axel-bubble.png
"
        width="sm:400"
        title="logo axel"
        variants={infiniteVariant}
      />
      {animateBubble.map((bubble, index) => {
        return (
          <Bubble
            key={index}
            classname={bubble.position}
            width={bubble.width}
            initial={bubble.initial}
            animate={bubble.animate}
          />
        );
      })}
    </div>
  );
};
