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
        repeat: Infinity, // Mengulang efek melayang secara terus-menerus saat dihover
        ease: "easeInOut", // Opsi: easeIn, easeOut, easeInOut, linear
        repeatType: "reverse", // Mengulang dengan memutar mundur animasi setelah mencapai akhir
      },
    },
  },
};

export const Hero = () => {
  return (
    <div className="flex items-center justify-center h-auto relative">
      <Image
        classname="z-20"
        src="../../../public/images/entah-1.png
"
        title="logo axel"
        variants={infiniteVariant}
      />
      <Bubble
        classname="bottom-1 left-[350px] top-[470px]"
        width="250"
        initial={{
          scale: 0,
          y: 30,
        }}
        animate={{
          scale: 1,
          y: 0,
          transition: {
            duration: 0.5,
            y: {
              duration: 1.5,
              repeat: Infinity, // Mengulang efek melayang secara terus-menerus saat dihover
              ease: "easeInOut", // Opsi: easeIn, easeOut, easeInOut, linear
              repeatType: "reverse", // Mengulang dengan memutar mundur animasi setelah mencapai akhir
            },
          },
        }}
      />
      <Bubble
        classname="bottom-1 right-[410px] top-[450px]"
        width="300"
        initial={{
          scale: 0,
          y: 30,
        }}
        animate={{
          scale: 1,
          y: 0,
          transition: {
            duration: 0.5,
            y: {
              duration: 1,
              repeat: Infinity, // Mengulang efek melayang secara terus-menerus saat dihover
              ease: "easeInOut", // Opsi: easeIn, easeOut, easeInOut, linear
              repeatType: "reverse", // Mengulang dengan memutar mundur animasi setelah mencapai akhir
            },
          },
        }}
      />

      <Bubble
        classname="bottom-1 right-[450px] top-[70px]"
        initial={{
          scale: 0,
          y: 30,
        }}
        animate={{
          scale: 1,
          y: 0,
          transition: {
            duration: 0.5,
            y: {
              duration: 0.8,
              repeat: Infinity, // Mengulang efek melayang secara terus-menerus saat dihover
              ease: "easeInOut", // Opsi: easeIn, easeOut, easeInOut, linear
              repeatType: "reverse", // Mengulang dengan memutar mundur animasi setelah mencapai akhir
            },
          },
        }}
      />
      <Bubble
        classname="bottom-1 left-[450px] top-[60px]"
        initial={{
          scale: 0,
          y: 30,
        }}
        animate={{
          scale: 1,
          y: 0,
          transition: {
            duration: 0.5,
            y: {
              duration: 0.9,
              repeat: Infinity, // Mengulang efek melayang secara terus-menerus saat dihover
              ease: "easeInOut", // Opsi: easeIn, easeOut, easeInOut, linear
              repeatType: "reverse", // Mengulang dengan memutar mundur animasi setelah mencapai akhir
            },
          },
        }}
      />
    </div>
  );
};
