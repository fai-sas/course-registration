import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import Card from '../Card/Card'

const Cards = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('data.json')
      .then((response) => response.json())
      .then((data) => setCards(data))
  }, [])

  return (
    <section className='my-8 grid grid-cols-3 gap-4'>
      {cards.map((card) => {
        return <Card card={card} key={card.id}></Card>
      })}
    </section>
  )
}
Cards.propTypes = {}
export default Cards
