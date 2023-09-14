import PropTypes from 'prop-types'
const SingleSelectedCourse = ({ selectCourse, courseCredit }) => {
  return (
    <div className='card bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title text-[#2F80ED]'>
          Credit Hour Remaining <span>0</span> hr
        </h2>
        <hr />
        <h3 className='card-title'>Course Name</h3>
        {selectCourse.map((item, index) => {
          return (
            <ul className='list-decimal' key={index}>
              <li className=''>{item.title}</li>
            </ul>
          )
        })}
        <hr />
        <h2 className='card-title'>Total Credit Hour : {courseCredit}</h2>
        <hr />
        <h2 className='card-title'>Total Price : 0 USD</h2>
      </div>
    </div>
  )
}
SingleSelectedCourse.propTypes = {
  selectCourse: PropTypes.object.isRequired,
  courseCredit: PropTypes.number.isRequired,
}
export default SingleSelectedCourse
