import React from 'react'
import ServiceContentHero from '@components/services/content/Hero'
import ServiceContentHeader from '@components/services/content/Header'
import ServiceContentList from '@components/services/content/List'

const hero = {
  title: 'Social Media Management',
  description:
    '<span>Youtube - Instagram - Linkedin - Facebook - </span><span className="socmed">Digital Marketing</span>',
  image: 'socmed',
}

const header = {
  titleStroke: 'What is a',
  titleNormal: 'Social Media Management?',
  description:
    'Social media management is the process of analyzing social media audiences and developing a strategy that’s tailored to them, creating and distributing content for social media profiles, monitoring online conversations, collaborating with influencers, providing community service, and monitoring, measuring, and reporting on social media performance and ROI.',
  descriptionHTML:
    'Social media management is the process of analyzing social media audiences and developing a <br /> strategy that’s tailored to them, creating and distributing content for social media profiles, <br /> monitoring online conversations, collaborating with influencers, providing community service, <br /> and monitoring, measuring, and reporting on social media performance and ROI.',
}

const contents = [
  {
    name: 'Youtube',
    description:
      'Instagram is an American photo and video sharing social networking service founded by Kevin Systrom and Mike Krieger. In April 2012, Facebook Inc. acquired the service for approximately US$1 billion in cash and stock.',
  },
  {
    name: 'Instagram',
    description:
      'YouTube is a free video sharing website that makes it easy to watch online videos. You can even create and upload your own videos to share with others. Originally created in 2005, YouTube is now one of the most popular sites on the Web, with visitors watching around 6 billion hours of video every month.',
  },
  {
    name: 'Linkedin',
    description:
      'LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps.',
  },
  {
    name: 'Facebook',
    description:
      "Facebook is a social networking site that makes it easy for you to connect and share with family and friends online. Originally designed for college students, Facebook was created in 2004 by Mark Zuckerberg while he was enrolled at Harvard University. By 2006, anyone over the age of 13 with a valid email address could join Facebook. Today, Facebook is the world's largest social network, with more than 1 billion users worldwide.",
  },
  {
    name: 'Digital Marketing',
    description:
      'Digital marketing is the component of marketing that uses internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services.',
  },
]

const color = 'pink'

const ServicesSocmed = () => {
  return (
    <section className='relative overflow-hidden'>
      <ServiceContentHero hero={hero} />
      <div className='lg:max-w-7xl lg:mx-auto'>
        <ServiceContentHeader header={header}>
          <div className='absolute -top-40 -right-12 lg:top-0 lg:right-0'>
            <img src='/images/decoration6.png' alt='decoration' />
          </div>
        </ServiceContentHeader>
        <ServiceContentList contents={contents} color={color}>
          <div className='absolute -top-48 -left-12'>
            <img src='/images/circle6.png' alt='circle' />
          </div>
          <div className='absolute top-[22%] -right-6'>
            <img src='/images/circle5.png' alt='circle' />
          </div>
          <div className='absolute top-[62%] lg:left-2 -left-12'>
            <img src='/images/circle6.png' alt='circle' />
          </div>
          <div className='absolute -bottom-80 -right-6'>
            <img src='/images/circle5.png' alt='circle' />
          </div>
          <div className='absolute lg:-bottom-20 lg:left-12 left-0 -bottom-52'>
            <img src='/images/decoration8.png' alt='decoration' />
          </div>
        </ServiceContentList>
      </div>
    </section>
  )
}

export default ServicesSocmed
