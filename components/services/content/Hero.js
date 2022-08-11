import React from 'react'
import { Slide } from 'react-awesome-reveal'

const Hero = ({ hero }) => {
  return (
    <>
      <div className='absolute top-0 left-0 h-screen w-full z-0'>
        <img
          src='/images/background.jpg'
          alt='background'
          className='w-full h-full'
        />
      </div>
      <Slide direction='up' triggerOnce>
        <div className='px-6 xl:px-10 h-[calc(100vh-4rem)] flex flex-col-reverse items-center justify-center lg:flex-row lg:max-w-7xl lg:mx-auto lg:h-screen lg:overflow-hidden 2xl:h-screen relative z-10 lg:justify-between'>
          <div className='text-white'>
            <div className='text-[2.5rem] px-16 lg:px-4 xl:px-0 lg:text-[63px] custom__font1 mb-4 lg:mb-6'>
              <span>{hero.title}</span>
            </div>
            <div className='text-xs px-16 lg:px-4 xl:px-0 lg:text-xl custom__font2 lg:leading-relaxed'>
              <span
                className='hero__description'
                dangerouslySetInnerHTML={{ __html: hero.description }}
              ></span>
            </div>
          </div>
          <div>
            <img
              src={`/images/${hero.image}.png`}
              alt='Software Development'
              className='w-60 h-60 lg:w-[700px] lg:h-[95vh] object-contain'
            />
          </div>
        </div>
      </Slide>
    </>
  )
}

export default Hero
