const Button = (props) => {
  const { children, classname } = props;
  return (
    <button className={`px-6 rounded-md items-center flex py-2 ${classname}`}>
      {children}
    </button>
  );
};

export default Button;
