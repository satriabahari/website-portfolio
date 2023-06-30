const Menu = (props) => {
  const {href, children} = props
  return(
    <li className="mx-3 text-sm font-medium hover:text-primary">
      <a href={href}>{children}</a>
    </li>
  )
}

export default Menu