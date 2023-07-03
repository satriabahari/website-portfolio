import Cards from "../Elements/Card/Index";
import Title from "../Elements/Text/Title";
import { FaGithub, FaJs, FaNeos, FaNodeJs, FaReact, FaSass } from "react-icons/fa";

const dataSkills = [
  {
    id: 1,
    icon: <FaJs size="50px"/>,
    title: "Javascript",
    description: "ini adalah sebuah contoh kata kata untuk Cards",
  },
  {
    id: 2,
    icon: <FaSass size="50px"/>,
    title: "TailwindCSS",
    description: "ini adalah sebuah contoh kata kata untuk Cards",
  },
  {
    id: 3,
    icon: <FaReact size="50px"/>,
    title: "React JS",
    description: "ini adalah sebuah contoh kata kata untuk Cards",
  },
  {
    id: 4,
    icon: <FaNeos size="50px"/>,
    title: "Next JS",
    description: "ini adalah sebuah contoh kata kata untuk Cards",
  },
  {
    id: 5,
    icon: <FaNodeJs size="50px"/>,
    title: "Node JS",
    description: "ini adalah sebuah contoh kata kata untuk Cards",
  },
  {
    id: 6,
    icon: <FaGithub size="50px"/>,
    title: "Github",
    description: "ini adalah sebuah contoh kata kata untuk Cards",
  },
];

const CardSkills = () => {
  return (
    <>
      {dataSkills.map((data) => (
        <Cards
          key={data.id}
          icon={data.icon}
          title={data.title}
          alt={data.title}
        >
          {data.description}
        </Cards>
      ))}
      </>
  );
};

export default CardSkills;
