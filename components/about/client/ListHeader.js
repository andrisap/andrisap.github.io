import React from 'react'
import { Slide } from 'react-awesome-reveal'

const AboutClientListHeader = () => {
  return (
    <div className='relative flex flex-col justify-center h-[calc(100vh-5rem)] lg:h-[780px] items-center text-3xl sm:text-6xl lg:text-[80px]'>
      <div className='custom__font1 relative px-4'>
        <Slide direction='up' triggerOnce>
          <div className='flex gap-3'>
            <span className='relative font-semibold before:top-0 before:-left-1 before:bg-[#787777] before:w-[16px] before:h-[16px] sm:before:-top-2 sm:before:-left-4 sm:before:w-[42px] sm:before:h-[42px] lg:before:-left-3 before:absolute before:z-[-1]'>
              Our
            </span>
            <span className='text-transparent stroke__font'>Magical</span>
            <span className='font-semibold'>Clients</span>
          </div>
        </Slide>
        <div className='absolute -bottom-60 -left-16 lg:-bottom-64 lg:-left-40'>
          <img
            src='/images/decoration6.png'
            alt='decoration'
            className='lg:w-full'
          />
        </div>
        <div className='absolute -top-40 right-0 lg:-top-56 lg:-right-52'>
          <img
            src='/images/decoration8.png'
            alt='decoration'
            className='lg:w-[unset]'
          />
        </div>
      </div>
      <Slide direction='up' triggerOnce>
        <div className='w-6 lg:w-10 bg-black h-[3px] my-3 lg:mt-1 lg:mb-4 slide__up'></div>
        <div className='custom__font2 text-xs sm:text-base lg:text-[22px] px-4 slide__up'>
          <span>Proudly served some of the most famous brands</span>
        </div>
      </Slide>
    </div>
  )
}

export default AboutClientListHeader
