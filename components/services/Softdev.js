import React from 'react'
import ServiceContentHero from '@components/services/content/Hero'
import ServiceContentHeader from '@components/services/content/Header'
import ServiceContentList from '@components/services/content/List'

const hero = {
  title: 'Software Development',
  description:
    '<span>Website Development - Web App Development - </span><span className="softdev">Mobile Apps Development - Information System</span>',
  image: 'softdev',
}

const header = {
  titleStroke: 'What is a',
  titleNormal: 'Software Management',
  description:
    'Software project management is an art and science of planning and leading software projects. It is a sub-discipline of project management in which software projects are planned, implemented, monitored and controlled.',
  descriptionHTML:
    'Software project management is an art and science of planning and leading <br /> software projects. It is a sub-discipline of project management in which <br /> software projects are planned, implemented, monitored and controlled.',
}

const contents = [
  {
    name: 'Website Development',
    description:
      'Website development is the work involved in developing a Web site for the Internet or an Intranet. Web development can raneg from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.',
  },
  {
    name: 'Web App Development',
    description:
      "Web application development is the creation of application programs that reside on remote servers and are delivered to the user's device over the internet. A web application (web app) does not need to be downloaded and is instead accessed through a network.",
  },
  {
    name: 'Mobile Apps Development',
    description:
      'Mobile application, also referred to as a mobile app or simply an app, is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch.',
  },
  {
    name: 'Information System',
    description:
      'Information system is a formal, sociotechnical, organizational system designed to collect, process, store, and distribute information. From a sociotechnical perspective, information systems are composed by four components: task, people, structure, and technology.',
  },
]

const color = 'dark'

const ServicesSoftdev = () => {
  return (
    <section className='relative overflow-hidden'>
      <ServiceContentHero hero={hero} />
      <div className='lg:max-w-7xl lg:mx-auto'>
        <ServiceContentHeader header={header} color={color}>
          <div className='absolute lg:-top-64 -top-96 -left-20 z-[-1]'>
            <img
              src='/images/circle6.png'
              alt='circle'
              className='w-full h-full'
            />
          </div>
          <div className='absolute -bottom-32 -right-20 lg:-bottom-12 lg:right-0'>
            <img
              src='/images/decoration6.png'
              alt='decoration'
              className='lg:w-full'
            />
          </div>
        </ServiceContentHeader>
        <ServiceContentList contents={contents} color={color}>
          <div className='absolute -top-20 -right-12 z-[-1] transform rotate-180'>
            <img
              src='/images/circle6.png'
              alt='circle'
              className='w-full h-full'
            />
          </div>
          <div className='absolute top-[48%] -left-20 z-[-1] transform rotate-180'>
            <img
              src='/images/circle5.png'
              alt='circle'
              className='w-full h-full'
            />
          </div>
          <div className='absolute -bottom-52 left-2 z-[-1]'>
            <img
              src='/images/decoration8.png'
              alt='decoration'
              className='w-full h-full'
            />
          </div>
          <div className='absolute top-[110%] -right-20 z-[-1]'>
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

export default ServicesSoftdev
