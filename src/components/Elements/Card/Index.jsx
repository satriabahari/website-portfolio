import { Description } from "../Text/Description";
import { Title } from "../Text/Title";

export const Cards = ({ title, children, icon }) => {
  return (
    <div
      className="w-full rounded-xl border border-neutral bg-background dark:bg-primary"
      data-aos="flip-left"
    >
      <div className="m-6 flex flex-col justify-center dark:text-white">
        {icon}
        <Title classname="text-primary font-bold text-lg mt-3 mb-1 dark:text-white">
          {title}
        </Title>
        <Description classname="text-base dark:text-white">
          {children}
        </Description>
      </div>
    </div>
  );
};
