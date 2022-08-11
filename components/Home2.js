import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from 'next/image'

// import Image
// import Hero from '../assets/images/home/hero2.png'

const Home2 = () => {
  // bg #ab223e
  return (
    <div className='grid grid-cols-2 bg-home'>
      {/* Text Container */}
      <div className='w-full text-center md:text-left lg:p-20 mt-28 md:mt-10'>
        {/* <h1 className="text-4xl md:text-8xl font-bold text-white dark:text-gray-200 my-2">
                    Software
                </h1>
                <h1 className="text-4xl md:text-8xl font-bold text-white dark:text-gray-200 my-2">
                    Development
                </h1> */}
        <Splide
          options={{
            arrows: false,
          }}
        >
          <SplideSlide>
            <h1 className='text-4xl md:text-8xl font-bold text-white dark:text-gray-200 my-2'>
              Software
            </h1>
            <h1 className='text-4xl md:text-8xl font-bold text-white dark:text-gray-200 my-2'>
              Development
            </h1>
          </SplideSlide>
          <SplideSlide>
            <h1 className='text-4xl md:text-8xl font-bold text-white dark:text-gray-200 my-2'>
              Software
            </h1>
            <h1 className='text-4xl md:text-8xl font-bold text-white dark:text-gray-200 my-2'>
              Development
            </h1>
          </SplideSlide>
        </Splide>
      </div>

      {/* Image Container */}
      <div className='w-full hidden lg:block relative -mr-40 mt-20'>
        <img
          src='/images/hero2.png'
          className='object-cover lg:!h-[calc(100vh-5rem)] lg:!w-full'
          alt='hero'
        />
        {/* <Image
            src={Hero}
            className='object-cover lg:!h-[800px] lg:!w-full lg:!max-h-[unset]'
          /> */}
      </div>
    </div>
  )
}

export default Home2
