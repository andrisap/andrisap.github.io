import React, { useRef, useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Link from 'next/link'
import { Slide } from 'react-awesome-reveal'

const options = {
  type: 'loop',
  direction: 'ttb',
  arrows: false,
  autoplay: true,
  wheel: true,
  classes: {
    pagination: 'hidden',
  },
  breakpoints: {
    319: {
      heightRatio: '1',
    },
    374: {
      heightRatio: '.8',
    },
    424: {
      heightRatio: '.7',
    },
    767: {
      heightRatio: '.6',
    },
    1023: {
      heightRatio: '.8',
    },
    1024: {
      heightRatio: '.7',
    },
    2560: {
      heightRatio: '.65',
    },
    99999: {
      heightRatio: '.65',
    },
  },
}

const contents = [
  {
    title: 'Software Development',
    description:
      "Develops digital strategies and coordinates media plans for our client's products or services.",
    path: 'softdev',
  },
  {
    title: 'Content Production',
    description:
      'The process of developing and creating visual assets such as videos and photos to our clients.',
    path: 'content',
  },
  {
    title: 'Graphic Design',
    description:
      'We can make products that provide meaningful and relevant experiences for users.',
    path: 'design',
  },
  {
    title: 'Social Media Management',
    description:
      'The use of social media platforms to connect with your audiencce to build your brand, increase sales, and drive website traffic.',
    path: 'sosmed',
  },
]

const Home = () => {
  const splide = useRef()
  const progressBar = useRef()

  const measureHeight = () => {
    let current = splide.current.splide.Components.Controller.getIndex()

    let currentSlide = document.querySelector(`[id*=slide04]`)

    let currentTopContent = currentSlide.querySelector('.content__title')

    let currentButton = currentSlide.querySelector('.button')

    let currentHeight =
      currentButton.getBoundingClientRect().bottom -
      currentTopContent.getBoundingClientRect().top -
      60

    document.querySelector('.progress__track').style.height =
      currentHeight + 'px'

    document.querySelector('.progress__track').style.top =
      currentTopContent.getBoundingClientRect().top -
      currentSlide.getBoundingClientRect().top +
      30 +
      'px'

    return [current, currentHeight]
  }

  const onMove = () => {
    let measure = measureHeight()

    let totalSlide = 4
    let per = measure[1] / totalSlide
    progressBar.current.style.marginTop = per * measure[0] + 'px'
  }

  useEffect(() => {
    measureHeight()
  }, [])

  return (
    <section className='overflow-hidden h-screen'>
      <div className='flex flex-col-reverse md:flex-row h-full lg:max-w-7xl lg:mx-auto items-center lg:pt-20 pt-8 pb-8 relative z-10'>
        <div className='w-full md:w-[unset] ml-12 md:ml-8 mt-12 px-8'>
          <Slide direction='up' triggerOnce>
            <div>
              <Splide
                onMove={onMove}
                ref={splide}
                options={options}
                renderControls={() => (
                  <div className='bg-gray-400 h-[calc(100%)] sm:h-full absolute top-[30px] -left-8 lg:-left-12 progress__track'>
                    <div className='absolute -top-8 left-[-0.6rem] font-bold text-lg text-white custom__font2'>
                      <span>01</span>
                    </div>
                    <div className='absolute -bottom-8 left-[-0.6rem] font-bold text-lg text-white custom__font2'>
                      <span>04</span>
                    </div>
                    <div
                      ref={progressBar}
                      className='bg-black h-1/4 w-[3px]'
                    ></div>
                  </div>
                )}
              >
                {contents.map((content, index) => (
                  <SplideSlide
                    key={index}
                    className='text-sm lg:text-[unset] pr-4 flex flex-col justify-center'
                  >
                    <div className='content__title text-white text-3xl sm:text-4xl md:text-5xl lg:text-[80px] custom__font1 mb-4 md:mb-6'>
                      <span>{content.title}</span>
                    </div>
                    <div className='text-white text-xs lg:text-lg mb-4'>
                      <span>{content.description}</span>
                    </div>
                    <div className='button'>
                      <Link href={`/services/${content.path}`}>
                        <a className='text-xs block md:text-base py-1 px-3 lg:px-10 lg:py-4 md:px-6 md:py-2 rounded-[62px] bg-[#FFC800] text-[#AB223E] w-max cursor-pointer hover:bg-[#f3bf00]'>
                          <strong>See More!</strong>
                        </a>
                      </Link>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </Slide>
        </div>
        <div className='md:w-full md:flex-none flex lg:flex-[unset] items-center xl:justify-center lg:h-[calc(100vh-5rem)] lg:max-h-[unset] max-h-[50vh] h-full pt-8 px-8 lg:pt-[unset] lg:px-[unset]'>
          <Slide direction='right'>
            <div className='lg:p-8 pt-12 md:h-96 h-full lg:h-[unset] animated__home'>
              <img
                src='images/hero2.png'
                alt='hero'
                className='object-cover lg:object-contain transform h-[38vh] md:w-full md:h-full lg:h-[80vh]'
              />
            </div>
          </Slide>
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full z-0 h-screen'>
        <img
          src='images/background.jpg'
          className='w-full h-full'
          alt='Home'
        />
      </div>
    </section>
  )
}

export default Home
