import React, { useContext } from "react";
import { FirstLayout } from "../components/Layouts/FirstLayout";
import { MyContext } from "../context/MyContext";
import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";

const socialMedia = [
  {
    name: "Email",
    icon: <FaEnvelope size="35" />,
    link: "mailto:satriaabaharii@gmail.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size="35" />,
    link: "https://www.instagram.com/satriabaharii_/",
  },
  {
    name: "Github",
    icon: <FaGithub size="35" />,
    link: "https://github.com/satriabahari",
  },
];

export const Contact = () => {
  const context = useContext(MyContext);
  return (
    <FirstLayout
      classname="grid-cols-1 h-auto bg-background dark:bg-primary"
      ref={context.contactRef}
    >
      <div
        className="my-12 flex h-auto flex-col items-center justify-center rounded-xl border border-primary dark:border-background md:my-24 md:h-52"
        data-aos="zoom-in"
        data-aos-offset="50"
      >
        <h1 className="text-2xl font-bold dark:text-white md:text-4xl">
          Let's Connect!
        </h1>
        <div className="flex h-auto">
          {socialMedia.map((social, index) => {
            return (
              <div
                key={index}
                className="mx-3 my-4 mt-2 h-auto rounded-full border-2 border-primary p-2 dark:border-white md:my-0 md:mt-3 md:p-3"
              >
                <a href={social.link}>
                  <span className="dark:text-white">{social.icon}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </FirstLayout>
  );
};
