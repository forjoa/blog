import { CardType } from './Cards'

const Card = ({ card, key }: { card: CardType; key: number }) => {
  return (
    <div key={key} className={card.className}>
      <h2>{card.title}</h2>
      <p>{card.description}</p>
    </div>
  )
}

export default Card
