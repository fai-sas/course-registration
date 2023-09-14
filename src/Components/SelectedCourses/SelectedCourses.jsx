import PropTypes from 'prop-types'
import SingleSelectedCourse from '../SingleSelectedCourse/SingleSelectedCourse'
const SelectedCourses = ({ selectCourse }) => {
  return (
    <main className='lg:col-span-2 my-8'>
      <SingleSelectedCourse selectCourse={selectCourse} />
    </main>
  )
}
SelectedCourses.propTypes = {
  selectCourse: PropTypes.object.isRequired,
}
export default SelectedCourses
