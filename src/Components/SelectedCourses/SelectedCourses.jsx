import PropTypes from 'prop-types'
import SingleSelectedCourse from '../SingleSelectedCourse/SingleSelectedCourse'
const SelectedCourses = ({
  selectCourse,
  courseCredit,
  totalPrice,
  remainingCredit,
}) => {
  return (
    <main className='my-8 lg:col-span-2'>
      <SingleSelectedCourse
        selectCourse={selectCourse}
        courseCredit={courseCredit}
        totalPrice={totalPrice}
        remainingCredit={remainingCredit}
      />
    </main>
  )
}
SelectedCourses.propTypes = {
  selectCourse: PropTypes.array.isRequired,
  courseCredit: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  remainingCredit: PropTypes.number.isRequired,
}
export default SelectedCourses
