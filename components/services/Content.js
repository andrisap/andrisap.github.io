import React from 'react'
import ServiceContentHero from '@components/services/content/Hero'
import ServiceContentHeader from '@components/services/content/Header'
import ServiceContentList from '@components/services/content/List'

const hero = {
  title: 'Content Production',
  description:
    '<span>Video Company Profile - Product Photo - </span><span className="content1">Video Documentation - Youtube Content - </span><span className="content2">Video Promotion</span>',
  image: 'contentprod',
}

const header = {
  titleStroke: 'What is a',
  titleNormal: 'Content Production?',
  description:
    'Content production is the process of developing and creating visual or written assets, such as videos, photos, eBooks, website or landing page, and infographics.',
  descriptionHTML:
    'Content production is the process of developing and creating visual or written assets, <br /> such as videos, photos, eBooks, website or landing page, and infographics.',
}

const contents = [
  {
    name: 'Video Company Profile',
    description:
      'Company profile video is a short synopsis about who your brand is as a whole and what it has to offer to the consumer. A profile video can be set up interview style, illustrated, overlayed with music and imagery, or even a fine art documentary-style video.',
  },
  {
    name: 'Product Photo',
    description:
      'Product photography is a type of commercial photography that involves taking pictures of products for commercial use. The product may be an item or a food or prepared dish. Generally, though, a product in product photography is small enough to sit atop a table.',
  },
  {
    name: 'Video Documentation',
    description:
      'Video documentation serves as recording an activity or event in the form of videos or photos with assistive devices, namely SLR cameras and camcorders. From the recording, it will be submitted to the editor to make a video that will be published to the public.',
  },
  {
    name: 'Video Content',
    description:
      'Motion graphics are a type of animation. While motion graphics describes moving or animated graphic design, animation is an umbrella term for the whole field of moving imagery, including everything from cartoons to claymation.',
  },
  {
    name: 'Video Promotion',
    description:
      'Promotional Video is a form of displaying audio-visual information so that it becomes the key to a brand or sharing information with customers and end consumers.',
  },
]

const color = 'pink'

const ServicesContent = () => {
  return (
    <section className='relative overflow-hidden'>
      <ServiceContentHero hero={hero} />
      <div className='lg:max-w-7xl lg:mx-auto'>
        <ServiceContentHeader header={header}>
          <div className='absolute lg:-top-24 right-0 -top-52'>
            <img
              src='/images/decoration8.png'
              alt='decoration'
              className='w-full h-full'
            />
          </div>
        </ServiceContentHeader>
        <ServiceContentList contents={contents} color={color}>
          <div className='absolute -top-60 -left-20 lg:left-0 z-[-1] transform rotate-180'>
            <img
              src='/images/circle5.png'
              alt='circle'
              className='w-full h-full'
            />
          </div>
          <div className='absolute top-[31%] -right-16 z-[-1] transform rotate-180'>
            <img
              src='/images/circle6.png'
              alt='circle'
              className='w-full h-full'
            />
          </div>
          <div className='absolute -bottom-28 -left-20 lg:left-1 z-[-1] transform rotate-180'>
            <img
              src='/images/circle5.png'
              alt='circle'
              className='w-full h-full'
            />
          </div>
        </ServiceContentList>
      </div>
    </section>
  )
}

export default ServicesContent
