// import { useState } from 'react'

import cardImg from '../src/assets/Rectangle2.png'
import { PiCurrencyDollarLight } from 'react-icons/pi'
import { PiBookOpenThin } from 'react-icons/pi'

function App() {
  return (
    <main className='container mx-auto p-8'>
      <section className='my-8 grid grid-cols-3 gap-4'>
        {/* card 1 */}
        <div className='card  bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            <img src={cardImg} alt='Shoes' className='rounded-xl' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>Introduction to C Programming</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <article className='flex items-center'>
              <div className='flex items-center'>
                <PiCurrencyDollarLight />
                <h1>
                  Price: <span>15000</span>{' '}
                </h1>
              </div>
              <div className='flex items-center'>
                <PiCurrencyDollarLight />
                <h1>
                  Credit: <span>1</span>hr
                </h1>
              </div>
            </article>

            <div className='card-actions'>
              <button className='btn w-full btn-primary'>Select</button>
            </div>
          </div>
        </div>
        {/* card 1 */}

        {/* card 2 */}
        <div className='card  bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            <img src={cardImg} alt='Shoes' className='rounded-xl' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>Introduction to C Programming</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <article className='flex gap-4 items-center'>
              <div className='flex items-center'>
                <PiCurrencyDollarLight />
                <h1>
                  Price: <span>15000</span>{' '}
                </h1>
              </div>
              <div className='flex items-center'>
                <PiBookOpenThin />
                <h1>
                  Credit: <span>1</span>hr
                </h1>
              </div>
            </article>

            <div className='card-actions'>
              <button className='btn w-full btn-primary'>Select</button>
            </div>
          </div>
        </div>
        {/* card 2 */}
      </section>
    </main>
  )
}

export default App
