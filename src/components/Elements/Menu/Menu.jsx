const Menu = ({onClick, children}) => {
  return(
    <li className="mx-3 text-sm font-medium hover:text-primary">
      <button onClick={onClick}>{children}</button>
    </li>
  )
}

export default Menu