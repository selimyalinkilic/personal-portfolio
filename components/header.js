import NavLink from './navlink'

const Header = () => {
  return (
    <header className="flex py-7">
      <div className="container w-screen px-6 sm:px-0 mx-auto">
        <nav className="flex justify-end">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/works">Works</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
