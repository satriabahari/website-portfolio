import { TypeAnimation } from "react-type-animation";

export const Type = () => {
  return (
    <h1 className="mb-6 text-2xl font-bold text-primary dark:text-white md:text-4xl">
      A{" "}
      <TypeAnimation
        sequence={[
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
