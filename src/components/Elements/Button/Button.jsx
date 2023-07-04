export const Button = ({ children, classname }) => {
  return (
    <button className={`px-6 rounded-md items-center flex py-2 ${classname}`}>
      {children}
    </button>
  );
};

