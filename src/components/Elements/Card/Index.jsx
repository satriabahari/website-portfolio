import Image from "../Image/Image";
import Description from "../Text/Description";
import Title from "../Text/Title";

const Cards = (props) => {
  const { src, title, children } = props;
  return (
    <div className="border border-neutral w-full rounded-xl bg-background backdrop-blur-sm">
      <div className="flex justify-center flex-col m-6">
        <Image
          src={src}
          alt={title}
          width="50px"
          classname="justify-center mb-3"
        />
        <Title classname="text-primary font-bold text-lg">{title}</Title>
        <Description classname="text-md">{children}</Description>
      </div>
    </div>
  );
};

export default Cards;
