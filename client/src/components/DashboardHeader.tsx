import { Link } from 'react-router-dom'
import icon from '../assets/blog-icon.png'

const DashboardHeader = () => {
  return (
    <header className='dashboard'>
      <div className='header-dashboard-container'>
        <Link to='/dashboard'>
          <img src={icon} alt='Blog icon' />
          Blogsite
        </Link>
        <div className='header-options'>
          <nav>
            <a href='/edit-profile'>Edit profile </a>
            <a href='/my-videos'>My videos </a>
            <a href='/follows'>Followers / Following </a>
            <a href='/' style={{ color: 'red' }}>
              Log out{' '}
            </a>
            <span></span>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader
