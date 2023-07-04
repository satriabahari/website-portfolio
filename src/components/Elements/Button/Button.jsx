export const Button = ({ children, classname }) => {
  return (
    <button className={`flex items-center rounded-md px-6 py-2 ${classname}`}>
      {children}
    </button>
  );
};
