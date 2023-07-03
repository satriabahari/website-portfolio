import { useRef } from "react";
import { MyContext } from "../context/MyContext";
import { AboutPage } from "./About";
import { HerosPage } from "./Home";
import { SkillsPage } from "./Skills";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";

export const IndexPages = () => {
  const valueRef = {
    homeRef: useRef(null),
    aboutRef: useRef(null),
    skillRef: useRef(null),
    portfolioRef: useRef(null),
  };

  return (
    <MyContext.Provider value={valueRef}>
      <HerosPage />
      <AboutPage />
      <SkillsPage />
      {/* <Portfolio /> */}
      <Footer />
    </MyContext.Provider>
  );
};
