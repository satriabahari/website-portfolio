import { useRef, useState } from "react";
import { MyContext } from "../context/MyContext";
import { AboutPage } from "./About";
import { HerosPage } from "./Home";
import { SkillsPage } from "./Skills";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";
import { Contact } from "./Contact";

export const IndexPages = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"))

  const valueRef = {
    homeRef: useRef(null),
    aboutRef: useRef(null),
    skillRef: useRef(null),
    portfolioRef: useRef(null),
    contactRef: useRef(null),
    theme,
    setTheme
  };

  return (
    <MyContext.Provider value={valueRef}>
      <HerosPage />
      <AboutPage />
      <SkillsPage />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </MyContext.Provider>
  );
};
