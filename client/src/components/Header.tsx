import { Link } from 'react-router-dom'
import logo from '../assets/blog-icon.png'
import '../styles/header.css'

const Header = () => {
  return (
    <header>
      <div className='header-container'>
        <img src={logo} alt='Logo icon' />
        <nav>
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
      </div>
    </header>
  )
}

export default Header
