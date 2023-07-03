import Image from "../Image/Image";
import Description from "../Text/Description";
import Title from "../Text/Title";

const Cards = (props) => {
  const { src, title, children, icon } = props;
  return (
    <div className="border border-neutral w-full rounded-xl bg-background">
      <div className="flex justify-center flex-col m-6">
        {icon}
        <Title classname="text-primary font-bold text-lg mt-3">{title}</Title>
        <Description classname="text-md">{children}</Description>
      </div>
    </div>
  );
};

export default Cards;
