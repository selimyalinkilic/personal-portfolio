import NavLink from './navlink'

const Header = () => {
  return (
    <header className="flex py-7">
      <div className="container w-screen mx-auto">
        <nav className="flex justify-end">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/works">Works</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
