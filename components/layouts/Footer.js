import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Slide } from 'react-awesome-reveal'

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]

const medias = [
  {
    name: 'Youtube',
    path: '#'
  },
  {
    name: 'Instagram',
    path: 'https://instagram.com/unicam.studio'
  },
  {
    name: 'Whatsapp',
    path: 'https://api.whatsapp.com/send?phone=6281225929178&text=Hallo Unicam Studio!'
  },
  {
    name: 'Mail',
    path: 'mailto:admin@unicamstudio.com'
  },
]

const contacts = [
  'unicamstudio',
  'unicam.studio',
  '+62 81225929178',
  'admin@unicamstudio.com',
]

const Footer = () => {
  return (
    <footer className='relative z-0'>
      <div className="footer__two">
        <div className='footer text-center lg:text-left pt-14 px-4 pb-14 lg:pb-28 lg:px-8 lg:pt-16 max-w-7xl mx-auto custom__font2 lg:grid flex flex-col'>
          <div className='text-center lg:text-left w-full'>
            <Slide direction='up' triggerOnce>
              <div className='font-bold text-3xl lg:text-5xl mb-4'>
                <span>unicam studio</span>
              </div>
              <div className='text-xl lg:text-2xl text-[#AB223E] mb-4'>
                <span>#brand Consulting and Digital Factory</span>
              </div>
              <div className='text-base lg:text-lg mb-12'>
                <span>
                  PT Unicam Digital Pictvers <br />
                  Jl. Dhuri, Tirtomartani, Kalasan, <br />
                  Sleman, Dearah Istimewa Yogyakarta 55571
                </span>
              </div>
              <div className='flex gap-6 items-center justify-center lg:justify-start'>
                <Link href="#">
                  <a className='transform hover:scale-105 hover:text-red-500 transition duration-2000 ease-out'>
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                  </a>
                </Link>
                <Link href="https://instagram.com/unicam.studio">
                  <a className='transform hover:scale-105 hover:text-yellow-800 transition duration-2000 ease-out'>
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </Link>
                <Link href="https://api.whatsapp.com/send?phone=6281225929178&text=Hallo Unicam Studio!">
                  <a className='transform hover:scale-105 hover:text-green-500 transition duration-2000 ease-out'>
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                  </a>
                </Link>
                <Link href="mailto:admin@unicamstudio.com">
                  <a className='transform hover:scale-105 hover:text-white transition duration-2000 ease-out'>
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  </a>
                </Link>
              </div>
            </Slide>
          </div>
          <div className='flex flex-col pt-14 lg:pt-0 h-full items-center lg:items-start w-full lg:justify-between lg:pb-20'>
            <Slide direction='up' triggerOnce>
              <div className='text-xl text-[#AB223E] font-bold'>
                <span>Link</span>
              </div>
              {links.map((link, index) => (
                  <Link href={link.path} key={index}>
                    <a className="hover:text-red-500">{link.name}</a>
                  </Link>
              ))}
            </Slide>
          </div>
          <div className='flex flex-col items-center lg:items-start mt-6 lg:mt-0 h-full w-full lg:justify-between lg:pb-20'>
            <Slide direction='up' triggerOnce>
              <div className='text-xl text-[#AB223E] font-bold'>
                <span>Media</span>
              </div>
              {medias.map((media, index) => (
                <Link href={media.path} key={index}>
                  <a className="hover:text-red-500" target="_blank">{media.name}</a>
                </Link>
              ))}
            </Slide>
          </div>
          <div className='flex flex-col h-full mt-6 lg:mt-0 items-center lg:items-start w-full lg:justify-between lg:pb-20'>
            <Slide direction='up' triggerOnce>
              <div className='text-xl text-[#AB223E] font-bold'>
                <span>Contact</span>
              </div>
              {contacts.map((contact, index) => (
                <div key={index}>
                  <span>{contact}</span>
                </div>
              ))}
            </Slide>
          </div>
        </div>
        <div className='border-t-2 border-white h-full'>
        {/* bg-[#f7d9de] before */}
          <div className='flex py-10 px-6 text-center items-center h-full lg:px-10 lg:max-w-7xl bg-[#F6F6F6] lg:mx-auto lg:text-xl lg:font-medium custom__font3 justify-center xl:justify-start lg:text-[unset]'>
            <span>@2021 PT.Unicam Digital Pictvers. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
