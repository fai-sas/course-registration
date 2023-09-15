import PropTypes from 'prop-types'
import { PiCurrencyDollarLight } from 'react-icons/pi'
import { PiBookOpenThin } from 'react-icons/pi'

const Card = ({ card, handleSelect }) => {
  const { image, title, description, price, credit, text } = card

  return (
    <div className='card bg-base-100 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img src={image} alt={title} className='rounded-xl ]' />
      </figure>
      <div className='card-body pt-4 items-center text-center'>
        <h2 className='card-title  text-lg'>{title}</h2>
        <p className='text-justify text-sm leading-normal text-[#1c1b1b99] p-0 m-0'>
          {description}
        </p>

        <article className='flex py-2 gap-4 justify-between items-center'>
          <div className='flex gap-2  items-center'>
            <PiCurrencyDollarLight />
            <h1 className=' text-base text-[#1c1b1b99]'>
              Price : <span>{price}</span>{' '}
            </h1>
          </div>
          <div className='flex gap-2  items-center'>
            <PiBookOpenThin />
            <h1 className=' text-base text-[#1c1b1b99]'>
              Credit : <span>{credit}</span>hr
            </h1>
          </div>
        </article>

        <button
          onClick={() => handleSelect(card)}
          className='btn capitalize w-full text-lg font-semibold hover:bg-[#2566bd] bg-[#2F80ED] text-white'
        >
          {text}
        </button>
      </div>
    </div>
  )
}
Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleSelect: PropTypes.func.isRequired,
}
export default Card
