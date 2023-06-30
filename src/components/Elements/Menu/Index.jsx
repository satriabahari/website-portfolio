import Menu from "./Menu";

const Menus = () => {
  return (
    <ul className="flex border border-primary py-1 px-3 rounded-full">
      <Menu href="/home">Home</Menu>
      <Menu href="/about">About</Menu>
      <Menu href="/skills">Skills</Menu>
      <Menu href="/portfolio">Portfolio</Menu>
      <Menu href="/contact">Contact</Menu>
    </ul>
  );
};

export default Menus;
