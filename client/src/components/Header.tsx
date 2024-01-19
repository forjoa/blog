import logo from '../assets/blog-icon.png'

const Header = () => {
  return (
    <header>
      <img src={logo} alt='Logo icon' />
      <nav>
        <a href="/">Home</a>
        <a href="/search">Search</a>
      </nav>
    </header>
  )
}

export default Header
