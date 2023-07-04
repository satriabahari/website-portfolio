export const Menu = ({ onClick, children }) => {
  return (
    <li className="mx-3 text-sm font-medium hover:text-primary dark:text-white">
      <button onClick={onClick}>{children}</button>
    </li>
  );
};
