import Cards from "../Elements/Card/Index";
import Title from "../Elements/Text/Title";

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

const CardPortfolio = () => {
  return (
    <>
      {dataPortfolio.map((data) => (
        <Cards
          key={data.id}
          src={data.image}
          title={data.title}
          alt={data.title}
        >
          {data.description}
        </Cards>
      ))}
      </>
  );
};

export default CardPortfolio;