const Description = (props) => {
  const { children, classname } = props;
  return <p className={`${classname}`}>{children}</p>;
};

export default Description;
