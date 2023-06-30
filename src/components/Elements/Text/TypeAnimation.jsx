import { TypeAnimation } from "react-type-animation";

const Type = () => {
  return (
    <h1 className="font-bold text-5xl mb-6 text-primary">
      A{" "}
      <TypeAnimation
        sequence={[
          "Student UNJA.",
          1000,
          "Front End Developer.",
          1000,
          "UI/UX Designer.",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        className="text-info"
      />
    </h1>
  );
};

export default Type;
