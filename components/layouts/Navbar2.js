import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Sticky from 'react-stickynode'
import { useRouter } from 'next/router'

// import Image
import LogoRed from '../../assets/images/navbar/logo-red-new.png'
import LogoWhite from '../../assets/images/navbar/logo-white-new.png'
import MobileDrawer from './mobile/mobile-drawer'

const Navbar2 = ({ isWhite }) => {
  const [isSticky, setIsSticky] = useState(false)
  const router = useRouter()

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true)
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false)
    }
  }

  const menu = [
    {
      name: 'Home',
      path: '/',
      anon: '/',
    },
    {
      name: 'About',
      path: '/about',
      group: 'about',
      children: [
        {
          name: 'Us',
          path: '/about',
        },
        {
          name: 'Client',
          path: '/about/client',
        },
      ],
    },
    {
      name: 'Services',
      path: '/services',
      group: 'services',
      children: [
        {
          name: 'Software Development',
          path: '/services/softdev',
        },
        {
          name: 'Content Production',
          path: '/services/content',
        },
        {
          name: 'Graphic Design',
          path: '/services/design',
        },
        {
          name: 'Sosial Media Management',
          path: '/services/sosmed',
        },
      ],
    },
    {
      name: 'Our Project',
      path: '/our-project',
      group: 'our-project',
      children: [
        {
          name: 'Software Development',
          path: '/our-project/softdev',
        },
        {
          name: 'Content Production',
          path: '/our-project/content',
        },
        {
          name: 'Graphic Design',
          path: '/our-project/design',
        },
        {
          name: 'Sosial Media Management',
          path: '/our-project/sosmed',
        },
      ],
    },
    {
      name: 'Contact',
      path: '/contact',
      group: 'contact',
    },
  ]

  return (
    <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
      <div
        className={`w-full absolute py-[20px] bg-transparent nav-sticky 
          ${isSticky ? 'sticky' : 'unSticky'}`}
      >
        <div className='flex max-w-7xl mx-auto px-8 justify-between w-full items-center'>
          {/* Logo / Home / Text */}
          <div className='flex flex-col px-2'>
            {isWhite && !isSticky ? (
              <Link href='/'>
                <a>
                  <Image src={LogoRed} height={46} width={250} />
                </a>
              </Link>
            ) : (
              <Link href='/'>
                <a>
                  <Image src={LogoWhite} height={46} width={250} />
                </a>
              </Link>
            )}
          </div>

          {/* Route Menu  */}
          <div className='flex flex-row space-x-16'>
            {menu.map((item, index) => (
              <div
                className='group relative dropdown tracking-wide space-x-16 hidden lg:block'
                key={index}
              >
                <Link href={item.path}>
                  <div
                    className={`text-base custom__font2 cursor-pointer text-[20px] pb-1
                      ${isWhite && !isSticky ? 'text-white' : ''.trim()}
                      ${
                        router.asPath.includes(item.group) &&
                        isWhite &&
                        !isSticky
                          ? 'active__white'
                          : router.asPath.includes(item.group) &&
                            isWhite &&
                            isSticky
                          ? 'active'
                          : router.asPath.includes(item.group) && !isWhite
                          ? 'active'
                          : ''.trim()
                      }
                      ${
                        router.asPath === item.anon
                          ? 'active__white'
                          : ''.trim()
                      }
                    `}
                  >
                    {item.name}{' '}
                    {item.children && (
                      <>
                        <svg
                          className='fill-current inline-block h-4 w-4'
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          viewBox='0 0 20 20'
                        >
                          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                        </svg>
                        <ul className='group-hover:block dropdown-menu absolute hidden h-auto mt-1'>
                          <li className='top-0 w-48 bg-[#42403F] rounded-md shadow px-[17px] py-4'>
                            {item.children.map((child, index) => (
                              <Link href={child.path} key={index}>
                                <a
                                  className={`${
                                    index === 0 ? ''.trim() : 'border-t-[1px]'
                                  } text-base text-[#fff] hover:text-gray-400 py-3 px-2 block whitespace-no-wrap`}
                                >
                                  {child.name}
                                </a>
                              </Link>
                            ))}
                          </li>
                        </ul>
                      </>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Menu */}
          <MobileDrawer sticky={isSticky} isWhite={isWhite} className='px-4' />
        </div>
      </div>
    </Sticky>
  )
}

export default Navbar2
