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
      </div>
    </header>
  )
}

export default DashboardHeader
