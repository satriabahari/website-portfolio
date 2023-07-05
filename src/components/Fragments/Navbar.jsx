import { FaMoon, FaSun } from "react-icons/fa";
import { Menus } from "../Elements/Menu/Index";
import { Image } from "../Elements/Image/Image";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/MyContext";

export const Navbar = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      context.setTheme(storedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      context.setTheme("dark");
    } else {
      context.setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (context.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", context.theme); // Menyimpan tema ke dalam local storage
  }, [context.theme]);

  const handleThemeClick = () => {
    context.setTheme(context.theme === "dark" ? "light" : "dark");
  };

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 col-span-2 flex w-full items-center justify-between border-b-[0.1px] border-primary bg-background bg-opacity-10 px-4 py-2 backdrop-blur-lg dark:border-darkprimary dark:bg-transparent md:px-16">
      <button onClick={() => handleClick(context.homeRef)}>
        <Image
          src={
            context.theme === "light"
              ? "../../../images/logo-(black)-transparan.png"
              : "../../../images/logo-(white)-transparan.png"
          }
          alt="logo axel"
          width="35px"
        />
      </button>
      <Menus />
      <button>
        {context.theme === "light" ? (
          <FaMoon size="20" color="orange" onClick={handleThemeClick} />
        ) : (
          <FaSun size="20" color="orange" onClick={handleThemeClick} />
        )}
      </button>
    </nav>
  );
};
