import { FaMoon } from "react-icons/fa";
import Menus from "../Elements/Menu/Index";
import Image from "../Elements/Image/Image";

const Navbar = () => {
  return (
    <nav className="w-full py-2 flex justify-between items-center border-b-[0.1px] border-primary col-span-2 fixed top-0 left-0 right-0 bg-background bg-opacity-10 z-10 backdrop-blur-md px-16">
      <a href="/home">
        <Image
          src="../../../public/images/logo-(black)-transparan.png"
          alt="logo axel"
          width="35px"
        />
      </a>
      <Menus />
      <button>
        <FaMoon color="black" />
      </button>
    </nav>
  );
};

export default Navbar;
