import { Image } from "../Elements/Image/Image";
import { useEffect } from "react";
import Aos from "aos";

export const About = () => {
  // useEffect(() => {
  //   Aos.init({duration: 1500})
  // })

  return (
    <div className="flex h-auto items-end justify-center md:items-center">
      <Image
        src="../../../images/logo-(black)-transparan.png
"
        title="logo axel"
        width="500px"
        aos="fade-right"
      />
    </div>
  );
};
