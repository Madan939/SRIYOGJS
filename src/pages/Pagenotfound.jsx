import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
  useEffect(() => {
    document.title = "SRIYOG | Download App"
  })
  return (
    <>
      <section className='max-w-[1140px] max-lg:w-[88%] mx-auto flex justify-around items-center  my-[56px]'>
        <div className='lg:w-[45%] max-lg:w-[50%] text-center space-y-6'>
          <p className='text-[2.3rem]  max-lg:text-[1.6rem] max-md:text-[1.5rem] '>Find Skilled Professionals</p>
          <img src="/src/assets/images/app/mobile.png" alt="mobile" className='h-64 hidden max-md:block mx-auto' />
          <p className='text-[1.2rem]hidden md:block'>100K+ Downloads</p>
          <p className='font-semibold '>now India Added</p>
          <div className='grid grid-cols-2 gap-4 position-center'>
            <Link to="https://bit.ly/sriyog" target='_blank'><img src="/src/assets/images/app/google.png" alt="google" /></Link>
            <Link to="https://bit.ly/sriyogios" target='_blank'><img src="/src/assets/images/app/apple.png" alt="apple" /></Link>
          </div>
        </div>
        <div className='lg:w-[25%]  hidden md:block'>
          <img src="/assets/images/app/mobile.png" alt="mobile" className='h-96 mx-auto' />
        </div>
      </section>
    </>
  )
}

export default Pagenotfound