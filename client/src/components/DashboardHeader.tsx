import { Link } from 'react-router-dom'
import icon from '../assets/blog-icon.png'

const DashboardHeader = () => {
  return (
    <header className='dashboard'>
      <div className='header-dashboard-container'>
        <Link to='/dashboard'>
          <img src={icon} alt='Blog icon' />
          <h1>Blogsite</h1>
        </Link>
        <div className='header-options'>
          <nav>
            <Link to='/dashboard'>Home</Link>
            <Link to='/dashboard/my-blogs'>My blogs</Link>
            <Link to='/dashboard/follows'>Followers / Following</Link>
            <Link to='/' style={{ color: 'red' }}>Log out</Link>
            <span></span>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader
