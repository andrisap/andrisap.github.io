import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

// import Image
import LogoRed from '../../assets/images/navbar/logo-red-new.png';
import LogoWhite from '../../assets/images/navbar/logo-white-new.png';

const Navbar = ({ isWhite }) => {
  const router = useRouter()
  const menu = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
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
      name: 'Work',
      path: '/work',
      children: [
        {
          name: 'Software Development',
          path: '/work/softdev',
        },
        {
          name: 'Content Production',
          path: '/work/content',
        },
        {
          name: 'Graphic Design',
          path: '/work',
        },
        {
          name: 'Sosial Media Management',
          path: '/work/sosmed',
        },
      ],
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ]

  return (
    <nav className='fixed bg-transparent w-full z-20 top-0 mt-0 dark:bg-gray-900 lg:left-0 lg:right-0'>
      <div className='max-w-7xl mx-auto px-4 py-1 md:py-5'>
        <div className='flex md:flex-row justify-between items-center px-12 py-1'>
          {/* Logo / Home / Text */}
          <div className='flex flex-col'>
            {isWhite ? (
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
              <div className='group relative dropdown tracking-wide space-x-16 hidden lg:block' key={index}>
                <Link href={item.path}>
                  <div
                    className={`text-base custom__font2 cursor-pointer text-[20px] ${isWhite ? 'text-white' : ''}`}
                  >
                    {item.name}{' '}

                    {item.children && (
                      <>
                        <svg
                          className="fill-current inline-block h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width='16'
                          height='16'
                          viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                        <ul className="group-hover:block dropdown-menu absolute hidden h-auto">
                          <li className="top-0 w-48 bg-[#42403F] rounded-md shadow px-3 py-4">
                            {item.children.map((child, index) => (
                              <Link href={child.path} key={index}>
                                <a
                                  className="rounded-t text-[18px] text-[#fff] hover:text-gray-400 py-2 px-2 block whitespace-no-wrap"
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
        </div>
      </div>
      {/* Mobile Menu  */}
      <div className='space-x-8 block m-2 lg:hidden'>
        {menu.map((item, index) => (
          <Link href={item.path} key={index}>
            <a className='text-base font-normal text-gray-600 dark:text-gray-300'>
              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
