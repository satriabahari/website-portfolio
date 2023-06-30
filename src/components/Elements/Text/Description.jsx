const Description = (props) => {
  const { children, classname } = props;
  return <p className={`text-neutral ${classname}`}>{children}</p>;
};

export default Description;
