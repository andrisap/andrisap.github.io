import React, { useState, useEffect } from 'react'
import { Slide } from 'react-awesome-reveal'

const List = ({ contents, color, children }) => {
  const colors = ['#787777', '#D4304B']
  
  return (
    <>
      <div className='relative mb-40 lg:flex lg:flex-col lg:px-8 lg:gap-36 lg:mb-80'>
        {children}
        {contents.map((content, index) => (
          <Slide key={index} triggerOnce>
            <div
              className='flex flex-col mb-8 gap-1 lg:flex lg:mb-[unset] lg:flex-row lg:gap-32 lg:justify-between px-4'
            >
              <div className='uppercase text-lg lg:w-[37%] lg:flex-none lg:text-4xl xl:leading-normal font-bold'>
                <span
                  className={`relative lg:before:mt-[9px] before:absolute before:w-6 lg:before:left-0 lg:before:w-16 before:h-[3px] before:bg-[${
                    color == 'dark'
                      ? index % 2 == 0
                        ? colors[0]
                        : colors[1]
                      : index % 2 == 0
                      ? colors[1]
                      : colors[0]
                  }]`}
                >
                </span>
                <p className='mt-2 lg:mt-10'>{content.name}</p>
              </div>
              <div className='text-sm lg:text-[22px] lg:leading-loose xl:leading-[32px]'>
                <span>{content.description}</span>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </>
  )
}

export default List
