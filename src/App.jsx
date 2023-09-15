import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cards from './Components/Cards/Cards'
import SelectedCourses from './Components/SelectedCourses/SelectedCourses'

function App() {
  const [selectCourse, setSelectCourse] = useState([])
  const [courseCredit, setCourseCredit] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [remainingCredit, setRemainingCredit] = useState(20)

  const handleSelect = (course) => {
    const alreadySelected = selectCourse.find((item) => item.id == course.id)
    let credit = course.credit
    let price = course.price

    if (alreadySelected) {
      return toast.error('Course Selected Already!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    } else {
      selectCourse.forEach((item) => {
        credit = credit + item.credit
        price = price + item.price
      })

      const remaining = 20 - credit

      if (credit > 20) {
        return toast.warning('Sorry! Not Enough Credit', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })
      } else {
        setSelectCourse([...selectCourse, course])
        setCourseCredit(credit)
        setTotalPrice(price)
        setRemainingCredit(remaining)
      }
    }
  }

  return (
    <main className='container p-8 mx-auto'>
      <h1 className='py-8 text-4xl font-bold text-center'>
        Course Registration
      </h1>
      <article className='grid grid-cols-1 gap-8 lg:grid-cols-7'>
        <Cards handleSelect={handleSelect} />
        <SelectedCourses
          selectCourse={selectCourse}
          courseCredit={courseCredit}
          totalPrice={totalPrice}
          remainingCredit={remainingCredit}
        />
      </article>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </main>
  )
}

export default App
