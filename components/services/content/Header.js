import React from 'react'
import { Slide } from 'react-awesome-reveal'

const colors = ['#D4304B', '#787777']

const Header = ({ header, color, children }) => {
  return (
    <>
      <div className='py-2 my-96 lg:py-10 lg:px-56 lg:my-[340px] text-center relative'>
        {children}
        <Slide triggerOnce>
          <div className='flex flex-col items-center'>
            <div className='text-3xl md:text-4xl lg:text-5xl custom__font1 relative'>
              <span
                className={`relative stroke__font mr-2 text-transparent before:absolute before:w-6 before:h-6 before:-top-1 before:left-0 lg:before:top-1 lg:before:left-0 lg:before:w-8 lg:before:h-8 before:bg-[${
                  color == 'dark' ? colors[0] : colors[1]
                }] before:z-[-1]`}
              >
                {header.titleStroke}
              </span>
              <span>{header.titleNormal}</span>
            </div>
            <div className='w-6 lg:w-10 bg-black h-[3px] my-4'></div>
            <div className='custom__font2 text-[.7rem] md:text-sm lg:text-xl px-2 md:px-8 lg:px-0'>
              <span className='md:block xl:hidden'>{header.description}</span>
              <span
                className='hidden md:hidden xl:block'
                dangerouslySetInnerHTML={{ __html: header.descriptionHTML }}
              />
            </div>
          </div>
        </Slide>
      </div>
    </>
  )
}

export default Header
