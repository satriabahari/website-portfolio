import { Description } from "../Text/Description";
import { Title } from "../Text/Title";

export const Cards = ({ title, children, icon, src }) => {
  return (
    <div
      className="w-full overflow-hidden rounded-xl border border-primary bg-background backdrop-blur-lg dark:border-darkprimary dark:bg-darkprimary dark:bg-opacity-10"
      data-aos="flip-left"
    >
      <div className=" flex flex-col justify-center dark:text-white">
        <img src={src}/>
        <div className="m-6">
          {icon}
          <Title classname="text-primary font-bold text-lg mt-3 mb-1 dark:text-white h-14">
            {title}
          </Title>
          <Description classname="text-base dark:text-white">
            {children}
          </Description>
        </div>
      </div>
    </div>
  );
};
