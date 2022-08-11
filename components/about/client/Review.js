import React, { useEffect, useRef } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Slide } from 'react-awesome-reveal'

const clientsReviews = [
  {
    name: 'Petrus Tedja Hapsoro',
    role: 'Managing Director',
    description:
      'Lihat hasilnya. Sungguh luar biasa. Karena kita tidak hanya membuat video biasa, tetapi suatu hasil video yg bisa membuat perubahan.',
    image: 'petrus.png',
    sizeDesc: 'text-xs lg:text-[22px]',
    sizeName: 'text-xl lg:text-3xl',
    sizeRole: 'text-base lg:text-2xl'
  },
  {
    name: 'Prof. Dr. Drh. Clara M. Kusharto, M.Sc.',
    role: 'Tim Peneliti Teknologi Pangan IPB',
    description:
      'Video ini menampilkan  benang merah yang runut mulai dari masalah dan solusi penanganan  masalah gizi khususnya Stunting di Tesabela.  Protein dan vitamin A yang sangat diperlukan bagi anak2 stunting untuk tumbuh dan berkembang dg baik.',
    image: 'clara.png',
    sizeDesc: 'text-xs lg:text-[22px]',
    sizeName: 'text-xl lg:text-2xl',
    sizeRole: 'text-base lg:text-lg'
  },
  {
    name: 'Yosef Adhitya Duta D.',
    role: 'Director',
    description:
      'Videonya bagus, dari segi pengambilan gambarnya pun sangat mudah di mengerti pesan yg ingin di sampaikan, videonya juga sangat mengedukasi anak anak milenial, semangat terus untuk tim Unicam Studio.',
    image: 'duta2.png',
    sizeDesc: 'text-xs lg:text-[22px]',
    sizeName: 'text-xl lg:text-3xl',
    sizeRole: 'text-base lg:text-2xl'
  },
  {
    name: 'Malik Khidir',
    role: 'Director',
    description:
      'Hasil Video dokumenternya keren, dikerjakan dengan profesional dan disiplin tinggi. Semangat selalu milenial muda Unicam, semoga terus memberi karya terbaik demi kemajuan bangsa Indonesia.',
    image: 'malik.png',
    sizeDesc: 'text-xs lg:text-[22px]',
    sizeName: 'text-xl lg:text-[34px]',
    sizeRole: 'text-base lg:text-2xl'
  },
  // {
  //   name: 'Dr.Mahmud',
  //   role: 'Director',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nunc, hac semper cum vitae. Vulputate et quis vel venenatis pulvinar nascetur blandit diam donec. Odio cras lectus eget sed id. Vel eget in aliquet cras rhoncus nunc diam cursus. Etiam leo.',
  //   image: 'jerome.png',
  // },
]

const options = {
  type: 'loop',
  autoplay: true,
  arrows: false,
  pagination: false,
  focus: 'center',
  padding: '1rem',
  breakpoints: {
    767: {
      fixedWidth: '',
      gap: '1rem',
    },
    2560: {
      fixedWidth: '582px',
      gap: '3rem',
    },
    9999: {
      fixedWidth: '582px',
      gap: '3rem',
    },
  },
}

const Review = () => {
  const splide = useRef()

  const getCardCenter = () => {
    let index = splide.current.splide.Components.Controller.getIndex()
    let currentCard = document.querySelector(`[id*=slide0${index + 1}]`)

    let cards = document.querySelectorAll(`[id*=slide0`)
    cards.forEach((card) => {
      card.classList.remove('transform', 'md:scale-110', 'lg:scale-110')
    })

    currentCard.classList.add('transform', 'md:scale-110', 'lg:scale-110')
  }

  const onMove = () => {
    getCardCenter()
  }

  useEffect(() => {
    getCardCenter()
  }, [])

  return (
    <div className='relative review bg-[#F6F6F6]'>
      <Slide direction='up' triggerOnce>
        <div className='max-w-7xl mx-auto pt-36 mb-[453px] overflow-hidden'>
          <Splide options={options} ref={splide} onMove={onMove}>
            {clientsReviews.map((review, index) => (
              <SplideSlide key={index}>
                <div className='shadow-lg rounded-lg px-6 py-6 lg:py-8 transition duration-500 lg:px-10 mb-[91px] bg-white'>
                  <div className='flex gap-4 items-center mb-6 lg:h-[167]'>
                    <div className='flex-none -mt-12 lg:-mt-28'>
                      <img
                        src={`/images/${review.image}`}
                        alt={review.name}
                        className='w-24 h-24 lg:w-36 lg:h-36 rounded-full drop-shadow-2xl'
                      />
                    </div>
                    <div className='flex flex-col gap-2 lg:h-20'>
                      <div className={`text-[#AB223E] font-bold ${review.sizeName}`}>
                        <span>{review.name}</span>
                      </div>
                      <div className={`uppercase font-bold ${review.sizeRole}`}>
                        <span>{review.role}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`${review.sizeDesc} leading-normal lg:leading-[32px] custom__font2 lg:h-44`}>
                    <span>{review.description}</span>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </Slide>
    </div>
  )
}

export default Review
