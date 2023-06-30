const Title = (props) => {
  const {children, classname} = props
  return <h1 className={`font-semibold ${classname}`}>{children}</h1>;
};

export default Title;
 