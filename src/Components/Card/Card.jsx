import PropTypes from 'prop-types'
import { PiCurrencyDollarLight } from 'react-icons/pi'
import { PiBookOpenThin } from 'react-icons/pi'

const Card = ({ card }) => {
  const { image, title, description, price, credit, text } = card

  return (
    <div className='card  bg-base-100 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img src={image} alt={title} className='rounded-xl' />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>

        <article className='flex gap-4 items-center'>
          <div className='flex gap-2  items-center'>
            <PiCurrencyDollarLight />
            <h1>
              Price: <span>{price}</span>{' '}
            </h1>
          </div>
          <div className='flex gap-2  items-center'>
            <PiBookOpenThin />
            <h1>
              Credit: <span>{credit}</span>hr
            </h1>
          </div>
        </article>

        <div className='card-actions'>
          <button className='btn w-full btn-primary'>{text}</button>
        </div>
      </div>
    </div>
  )
}
Card.propTypes = {
  card: PropTypes.array.isRequired,
}
export default Card
