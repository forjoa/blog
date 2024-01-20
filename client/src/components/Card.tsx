import { CardType } from './Cards'

const Card = ({ card, index }: { card: CardType; index: number }) => {
  return (
    <div key={index} className={card.className}>
      <h2>{card.title}</h2>
      <p>{card.description}</p>
    </div>
  )
}

export default Card
