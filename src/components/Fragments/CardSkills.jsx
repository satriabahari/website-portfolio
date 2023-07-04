import { Cards } from "../Elements/Card/Index";
import {
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
    description: "ini adalah sebuah contoh kata kata untuk Cards",
  },
  {
    icon: <FaCss3 size="50px" />,
    title: "CSS",
    description: "ini adalah sebuah contoh kata kata untuk Cards",
  },
  {
    icon: <FaJs size="50px" />,
    title: "Javascript",
    description: "ini adalah sebuah contoh kata kata untuk Cards",
  },
  {
    id: 2,
    icon: <FaSass size="50px" />,
    title: "TailwindCSS",
    description: "ini adalah sebuah contoh kata kata untuk Cards",
  },
  {
    icon: <FaReact size="50px" />,
    title: "React JS",
    description: "ini adalah sebuah contoh kata kata untuk Cards",
  },
  {
    icon: <FaNeos size="50px" />,
    title: "Next JS",
    description: "ini adalah sebuah contoh kata kata untuk Cards",
  },
  {
    icon: <FaNodeJs size="50px" />,
    title: "Node JS",
    description: "ini adalah sebuah contoh kata kata untuk Cards",
  },
  {
    icon: <FaGithub size="50px" />,
    title: "Github",
    description: "ini adalah sebuah contoh kata kata untuk Cards",
  },
];

export const CardSkills = () => {
  return (
    <>
      {dataSkills.map((data, index) => (
        <Cards key={index} icon={data.icon} title={data.title} alt={data.title}>
          {data.description}
        </Cards>
      ))}
    </>
  );
};
