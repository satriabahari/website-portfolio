const FirstLayout = ({ children, navbar, classname }) => {
  return (
    <div className={`container px-16 grid ${classname}`} >
      {navbar}
      {children}
    </div>
  );
};

export default FirstLayout;
