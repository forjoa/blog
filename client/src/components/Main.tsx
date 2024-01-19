import '../styles/main.css'
import screenshot from '../assets/screenshot.png'
import { Link } from 'react-router-dom'
import Cards from './Cards'

const Main = () => {
  return (
    <main>
      <div className='main-container'>
        <h1>
          Your next favorite <strong>blog network</strong>
        </h1>
        <p>Where you can find your favorite blogger and their newest blog</p>
        <Link to='/register' className='register-btn main'>
          Try it for free
        </Link>
        <img src={screenshot} />
      </div>
      <Cards />
    </main>
  )
}

export default Main
