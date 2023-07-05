import { Image } from "../Elements/Image/Image";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

export const About = () => {
  const context = useContext(MyContext);

  return (
    <div className="flex h-auto items-end justify-center md:items-center">
      <Image
        src={
          context.theme === "light"
            ? "/images/logo-(black)-transparan.png"
            : "/images/logo-(white)-transparan.png"
        }
        title="logo axel"
        width="500px"
        aos="fade-right"
      />
    </div>
  );
};
