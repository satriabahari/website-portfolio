import { FaMoon, FaSun } from "react-icons/fa";
import {Menus} from "../Elements/Menu/Index";
import {Image} from "../Elements/Image/Image";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme); // Menyimpan tema ke dalam local storage
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="w-full py-2 flex justify-between items-center border-b-[0.1px] border-primary col-span-2 fixed top-0 left-0 right-0 bg-background bg-opacity-10 backdrop-blur-md px-16 z-50">
      <a href="/home">
        <Image
          src={
            theme === "light"
              ? "../../../public/images/logo-(black)-transparan.png"
              : "../../../public/images/logo-(white)-transparan.png"
          }
          alt="logo axel"
          width="35px"
        />
      </a>
      <Menus />
      <button>
        {theme === "light" ? (
          <FaMoon color="black" onClick={handleClick} />
        ) : (
          <FaSun color="white" onClick={handleClick} />
        )}
      </button>
    </nav>
  );
};
