import PropTypes from 'prop-types'
const SingleSelectedCourse = ({
  selectCourse,
  courseCredit,
  totalPrice,
  remainingCredit,
}) => {
  return (
    <div className='card mx-auto bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title font-bold text-lg text-[#2F80ED]'>
          Credit Hour Remaining {remainingCredit} hr
        </h2>
        <hr />
        <h3 className='card-title text-xl font-bold'>Course Name</h3>
        {selectCourse.map((item, index) => {
          return (
            <ol className='list-decimal list-inside  pt-2' key={index}>
              <li className='text-base leading-7 text-[#1c1b1b99]'>
                {item.title}
              </li>
            </ol>
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
