import logo from '../assets/blog-icon.png'
import {
  IconCopyright,
  IconHeart
} from '@tabler/icons-react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='image-container'>
          <img src={logo} alt='Logo blog' />
          <p>
            <IconCopyright /> All rights reserved to Joaquin Trujillo
          </p>
          <span>
            Make with love and dedication in Madrid <IconHeart color='red' />
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
