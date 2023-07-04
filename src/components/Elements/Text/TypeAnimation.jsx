import { TypeAnimation } from "react-type-animation";

export const Type = () => {
  return (
    <h1 className="mb-6 text-3xl font-bold text-primary dark:text-white md:text-5xl">
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
