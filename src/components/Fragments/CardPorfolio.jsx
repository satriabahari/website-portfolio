import { Cards } from "../Elements/Card/Index";

const dataPortfolio = [
  {
    id: 1,
    image: "https://placeholder.com/100x100",
    title: "Javascript",
    description: "ini adalah sebuah contoh kata kata untuk Cards",
  },
  {
    id: 2,
    image: "https://placeholder.com/100x100",
    title: "TailwindCSS",
    description: "ini adalah sebuah contoh kata kata untuk Cards",
  },
  {
    id: 3,
    image: "https://placeholder.com/100x100",
    title: "React JS",
    description: "ini adalah sebuah contoh kata kata untuk Cards",
  },
  {
    id: 4,
    image: "https://placeholder.com/100x100",
    title: "Next JS",
    description: "ini adalah sebuah contoh kata kata untuk Cards",
  },
];

export const CardPortfolio = () => {
  return (
    <>
      {dataPortfolio.map((data) => (
        <Cards
          key={data.id}
          src={data.image}
          title={data.title}
          alt={data.title}
          classname="w-full "
        >
          {data.description}
        </Cards>
      ))}
    </>
  );
};
