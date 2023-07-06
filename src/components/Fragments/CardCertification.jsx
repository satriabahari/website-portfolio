import React from "react";
import { Cards } from "../Elements/Card/Index";
import { FaCss3, FaHtml5 } from "react-icons/fa";
import { Button } from "../Elements/Button/Button";

const dataCertification = [
  {
    image: "images/dicoding.png",
    title: "Belajar Dasar Pemrograman Javascript",
    description: "Dicoding Academy",
  },
  {
    image: "images/tailwindcss-codepolitan.jpg",
    title: "TailwindCSS Online Codepolitan",
    description: "Codepolitan",
  },
];

export const CardCertification = () => {
  return (
    <>
      {dataCertification.map((data, index) => (
        <Cards key={index} src={data.image} title={data.title} alt={data.title} classname="xl:w-3/4 flex justify-center items-center m-auto">
          <span className="text-neutral dark:text-darkneutral">By </span>
          {data.description}
          {/* <Button>View Credential</Button> */}
        </Cards>
      ))}
    </>
  );
};
