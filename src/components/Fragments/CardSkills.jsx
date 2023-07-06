import { Cards } from "../Elements/Card/Index";
import {
  FaBootstrap,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNeos,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";

const dataSkills = [
  {
    icon: <FaHtml5 size="50px" />,
    title: "HTML",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    icon: <FaCss3 size="50px" />,
    title: "CSS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    icon: <FaJs size="50px" />,
    title: "Javascript",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 2,
    icon: <FaBootstrap size="50px" />,
    title: "Bootsrap",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    icon: <FaReact size="50px" />,
    title: "React JS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    icon: <FaNeos size="50px" />,
    title: "Next JS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    icon: <FaNodeJs size="50px" />,
    title: "Node JS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    icon: <FaGithub size="50px" />,
    title: "Github",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
];

export const CardSkills = () => {
  return (
    <>
      {dataSkills.map((data, index) => (
        <Cards
          key={index}
          icon={data.icon}
          title={data.title}
          alt={data.title}
          classname="w-full mt-0"
        >
          {data.description}
        </Cards>
      ))}
    </>
  );
};
