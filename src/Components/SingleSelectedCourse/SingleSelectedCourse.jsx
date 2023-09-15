import PropTypes from 'prop-types'
const SingleSelectedCourse = ({
  selectCourse,
  courseCredit,
  totalPrice,
  remainingCredit,
}) => {
  return (
    <div className='mx-auto shadow-xl card bg-base-100'>
      <div className='card-body'>
        <h2 className='card-title font-bold text-lg text-[#2F80ED]'>
          Credit Hour Remaining {remainingCredit} hr
        </h2>
        <hr />
        <h3 className='text-xl font-bold card-title'>Course Name</h3>

        {selectCourse.map((item, index) => {
          return (
            <li
              key={index}
              className=' list-decimal list-inside text-base leading-7 text-[#1c1b1b99]'
            >
              {item.title}
            </li>
          )
        })}

        <hr className='mt-2' />
        <h2 className=' py-2  card-title font-medium text-base text-[#1c1b1b99]'>
          Total Credit Hour : {courseCredit}
        </h2>
        <hr />
        <h2 className='py-2 card-title font-semibold text-base text-[#1c1b1b99]'>
          Total Price : {totalPrice} USD
        </h2>
      </div>
    </div>
  )
}
SingleSelectedCourse.propTypes = {
  selectCourse: PropTypes.array.isRequired,
  courseCredit: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  remainingCredit: PropTypes.number.isRequired,
}
export default SingleSelectedCourse
