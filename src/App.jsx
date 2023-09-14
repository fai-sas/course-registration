import { useState } from 'react'

import Cards from './Components/Cards/Cards'
import SelectedCourses from './Components/SelectedCourses/SelectedCourses'

function App() {
  const [selectCourse, setSelectCourse] = useState([])
  const [courseCredit, setCourseCredit] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const handleSelect = (course) => {
    const alreadySelected = selectCourse.find((item) => item.id == course.id)
    let credit = course.credit
    let price = course.price

    if (alreadySelected) {
      return alert('course selected already')
    } else {
      selectCourse.forEach((item) => {
        credit = credit + item.credit
        price = price + item.price
      })

      setSelectCourse([...selectCourse, course])
      setCourseCredit(credit)
      setTotalPrice(price)
    }
  }

  return (
    <main className='container mx-auto p-8'>
      <h1 className='py-8 text-4xl font-bold text-center'>
        Course Registration
      </h1>
      <article className='grid gap-4 grid-cols-1 lg:grid-cols-7'>
        <Cards handleSelect={handleSelect} />
        <SelectedCourses
          selectCourse={selectCourse}
          courseCredit={courseCredit}
          totalPrice={totalPrice}
        />
      </article>
    </main>
  )
}

export default App
