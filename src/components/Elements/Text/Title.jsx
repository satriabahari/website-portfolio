export const Title = ({ children, classname, aos }) => {
  return <h1 className={`font-semibold ${classname}`} data-aos={aos}>{children}</h1>;
};
