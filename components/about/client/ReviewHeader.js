import React from 'react'
import { Slide } from 'react-awesome-reveal'

const ReviewHeader = () => {
  return (
    <div className='relative z-[-1] flex flex-col justify-center pt-32 lg:h-full items-center text-xl sm:text-4xl lg:text-[48px] mt-10 lg:mt-[83px] lg:pt-[92px] bg-[#F6F6F6]'>
      <Slide direction='up' triggerOnce>
        <div className='max-w-7xl mx-auto'>
          <div className='custom__font1 flex gap-3 px-4'>
            <span className='text-transparent stroke__font relative after:top-0 after:-left-1 sm:after:-left-1 sm:after:-top-1 sm:after:w-[24px] sm:after:h-[24px] lg:after:-top-3 lg:after:-left-3 after:bg-[#D4304B] after:w-[14px] lg:after:w-[32px] after:h-[14px] lg:after:h-[32px] after:absolute after:z-[-1]'>
              What
            </span>
            <span className='font-semibold'>Clients</span>
            <span className='text-transparent stroke__font'>Say</span>
            <span className='font-semibold'>About Us</span>
          </div>
          <div className='w-6 lg:w-10 bg-black h-[3px] my-3 lg:mt-5 lg:mb-4 mx-auto'></div>
          <div className='custom__font2 text-[0.7rem] sm:text-sm px-4 lg:text-[22px]'>
            <span>
              Clients who have trusted and are satisfied with our services
            </span>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default ReviewHeader
