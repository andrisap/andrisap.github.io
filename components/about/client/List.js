import React, { useState } from 'react'
import { Slide } from 'react-awesome-reveal'

const clients = [
  'ypti',
  'unicam',
  'toyota',
  'stechoq',
  'sinarmas',
  'ugm_new',
  'inastek',
  'ipb',
  'ravelware',
  'helber',
  'bdi',
  'indigen',
  'smk-petrus',
  'mizulife',
  'sembada',
]

const List = () => {
  const [show, setShow] = useState(false)

  const onShow = () => {
    setShow(!show)
  }

  return (
    <div className='relative mt-24 lg:mt-36 px-4 lg:px-10 max-w-7xl mx-auto'>
      <div className='absolute -top-32 -right-40 lg:-right-11 lg:-top-56 z-[-1]'>
        <img
          src='/images/circle5.png'
          alt='circle'
          className='w-3/4 lg:w-full lg:h-full'
        />
      </div>
      <div className='relative grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='absolute bottom-[-37%] lg:bottom-[-140%] -left-8'>
          <img src='/images/decoration7.png' alt='decoration' />
        </div>
        <div className='absolute bottom-[-55%] lg:bottom-[-175%] -right-32 lg:-right-16'>
          <img
            src='/images/circle5.png'
            alt='circle'
            className='w-full h-full'
          />
        </div>
        <div className='absolute -bottom-1/4 -left-12 z-[-1]'>
          <img
            src='/images/circle6.png'
            alt='circle'
            className='w-full h-full'
          />
        </div>
        <div className='absolute bottom-[-300%] -left-12 z-[-1]'>
          <img
            src='/images/circle6.png'
            alt='circle'
            className='w-full h-full'
          />
        </div>
        {clients.map(
          (client, index) =>
            index < 6 && (
              <Slide key={index} direction='up' triggerOnce>
                <div
                  className='rounded-xl p-16 flex items-center h-[376px] justify-center bg-white card__shadow transform hover:scale-105 transition duration-2000 ease-out'
                >
                  <img
                    src={`/images/${client}.png`}
                    alt={client}
                    className='object-cover'
                  />
                </div>
              </Slide>
            )
        )}
      </div>
      {!show ? (
        <Slide direction='up' triggerOnce>
          <div
            className='text-center flex items-center justify-center mt-[55px] gap-2 cursor-pointer'
            onClick={onShow}
          >
            <span className='text-3xl text-[#D4304B] font-bold custom__font2'>
              View All
            </span>
            <img
              src='/images/dropdown-arrow.png'
              alt='dropdown-arrow'
              className='inline-block'
            />
          </div>
        </Slide>
      ) : (
        <>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8'>
            {clients.map(
              (client, index) =>
                index >= 6 && (
                  <Slide direction='up' triggerOnce>
                    <div
                      key={index}
                      className='rounded-xl p-16 h-[376px] flex items-center justify-center bg-white card__shadow transform hover:scale-105 transition duration-2000 ease-out'
                    >
                      <img
                        src={`/images/${client}.png`}
                        alt={client}
                        className='object-contain'
                      />
                    </div>
                  </Slide>
                )
            )}
          </div>
          <div
            className='text-center flex items-center justify-center mt-[55px] gap-2 cursor-pointer'
            onClick={onShow}
          >
            <span className='text-3xl text-[#D4304B] font-bold custom__font2'>
              Collapse
            </span>
            <img
              src='/images/dropdown-arrow.png'
              alt='dropdown-arrow'
              className='inline-block transform rotate-180'
            />
          </div>
        </>
      )}
    </div>
  )
}

export default List
