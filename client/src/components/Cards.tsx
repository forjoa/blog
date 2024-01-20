import '../styles/cards.css'
import Card from './Card'

export interface CardType {
  className: string
  title: string
  description: string
}

const Cards = () => {
  const cards: CardType[] = [
    {
      className: 'works',
      title: 'How we work?',
      description:
        'Discover the simplicity of our platform designed to make sharing your blogs effortless. Whether you are a seasoned blogger or just getting started, our user-friendly interface ensures a smooth and intuitive experience. Create an account, customize your profile, and start publishing your thoughts in minutes.',
    },
    {
      className: 'share',
      title: 'Share everything',
      description:
        'Unleash your creativity and share everything that matters to you. From personal anecdotes to professional insights, our platform welcomes a diverse range of content. Express yourself freely by writing articles, sharing images, and connecting with readers who appreciate your unique perspective. Join our community of storytellers and let your voice be heard. Share your passion, experiences, and expertise with the world!',
    },
    {
      className: 'register',
      title: 'Register for free',
      description:
        'Join us today and become part of our growing community. Registration is quick, easy, and completely free. Start sharing your stories without any ads!',
    },
    {
      className: 'who-we-r',
      title: 'Who we are?',
      description:
        'We are a platform dedicated to providing a space for individuals to share their personal and professional blogs. Get to know our team and discover the diverse voices within our community.',
    },
    {
      className: 'no-ads',
      title: 'Free and no ads',
      description:
        'Enjoy a completely ad-free experience on our platform. We believe in providing a seamless and distraction-free environment for both creators and readers.',
    },
    {
      className: 'categories',
      title: 'Any category',
      description:
        'Whether you are passionate about technology, travel, fashion, or any other topic, we welcome blogs from all categories. Explore and contribute to a wide range of subjects.',
    },
  ]

  return (
    <>
      <h2 className='subtitle'>The blogsite</h2>
      <div className='cards-container'>
        {cards.map((card, index) => (
          <Card card={card} index={index} />
        ))}
      </div>
    </>
  )
}

export default Cards
