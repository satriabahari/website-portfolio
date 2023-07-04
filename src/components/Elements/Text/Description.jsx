export const Description = ({ children, classname, aos }) => {
  return <p className={`${classname}`} data-aos={aos}>{children}</p>;
};

