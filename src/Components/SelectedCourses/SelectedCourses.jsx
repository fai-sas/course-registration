import PropTypes from 'prop-types'
const SelectedCourses = () => {
  return (
    <main className='lg:col-span-2 my-8'>
      <div className='card bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title'>
            Credit Hour Remaining <span>7</span> hr
          </h2>
          <hr />
          <h3 className='card-title'>Course Name</h3>
          <p className='card-title'>Text</p>
          <hr />
          <h2 className='card-title'>Total Credit Hour : 13</h2>
          <hr />
          <h2 className='card-title'>Total Price : 48000 USD</h2>
        </div>
      </div>
    </main>
  )
}
SelectedCourses.propTypes = {}
export default SelectedCourses
