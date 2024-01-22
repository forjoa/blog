import { CardType } from './Cards'

const Card = ({ card }: { card: CardType }) => {
  return (
    <div className={card.className}>
      <h2>{card.title}</h2>
      <p>{card.description}</p>
    </div>
  )
}

export default Card
