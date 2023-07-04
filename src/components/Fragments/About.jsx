import { Image } from "../Elements/Image/Image";
import { useEffect } from "react";
import Aos from "aos";

export const About = () => {
  // useEffect(() => {
  //   Aos.init({duration: 1500})
  // })

  return (
    <div className="flex items-center justify-center h-auto" >
      <Image
        src="../../../public/images/logo-(black)-transparan.png
"
        title="logo axel"
        width="500px"
        aos="fade-right"
      />
    </div>
  );
};
