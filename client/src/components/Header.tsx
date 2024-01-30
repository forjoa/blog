import { Link } from 'react-router-dom'
import logo from '../assets/blog-icon.png'
import '../styles/header.css'
import { useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <div className='header-container'>
        <img src={logo} alt='Logo icon' />
        <nav className={`header-nav ${menuOpen ? 'menu-open' : ''}`}>
          <div className='left-nav'>
            <Link to='/'>Home</Link>
            <Link to='/search'>Search</Link>
          </div>
          <div className='right-nav'>
            <Link to='/login' className='login-btn'>
              Login
            </Link>
            <Link to='/register' className='register-btn'>
              Try it now
            </Link>
          </div>
        </nav>
        <div className='burger-menu' onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header
