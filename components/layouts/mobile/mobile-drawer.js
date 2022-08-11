import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { Scrollbars } from 'react-custom-scrollbars-2'
import Drawer from './drawer'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

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
    name: 'Our Project',
    path: '/our-project',
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
  },
]

export default function MobileDrawer({ sticky, isWhite }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [height] = useState('0px')
  const [rotate] = useState('transform duration-700 ease')

  const contentSpace = useRef(null)

  function toggleAccordion(e) {
    let target = e.target
    let childrenTargetMaxHeight = target
      .closest('.dropdown')
      .querySelector('.children__wrapper').style.maxHeight

    if (childrenTargetMaxHeight == '0px') {
      target
        .closest('.dropdown')
        .querySelector(
          '.children__wrapper'
        ).style.maxHeight = `${contentSpace.current.scrollHeight}px`

      target.closest('.dropdown').querySelector('svg').style.transform =
        'rotate(180deg)'
    } else {
      target
        .closest('.dropdown')
        .querySelector('.children__wrapper').style.maxHeight = '0px'

      target.closest('.dropdown').querySelector('svg').style.transform =
        'rotate(0)'
    }
  }

  return (
    <Drawer
      width='320px'
      drawerHandler={
        <FontAwesomeIcon
          className={`${isWhite && !sticky ? 'text-white' : ''}`}
          icon={faBars}
        />
      }
      open={isDrawerOpen}
      toggleHandler={() => setIsDrawerOpen((prevState) => !prevState)}
      closeButton={<FontAwesomeIcon icon={faTimes} />}
      drawerStyle='drawer-s'
      closeBtnStyle='drawer-button-close'
    >
      <Scrollbars autoHide>
        <div className='draw-content'>
          <div className='draw-menu'>
            {menu.map((menuItem, i) => (
              <div className='flex flex-col dropdown' key={i}>
                {menuItem.children ? (
                  <>
                    <button
                      className='py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between'
                      onClick={(e) => toggleAccordion(e)}
                    >
                      <p className='inline-block text-footnote light'>
                        {menuItem.name}
                      </p>
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        className={`${rotate} inline-block`}
                      />
                    </button>
                    <div
                      ref={contentSpace}
                      style={{ maxHeight: `${height}` }}
                      className='flex flex-col overflow-auto transition-max-height duration-700 ease-in-out children__wrapper'
                    >
                      {menuItem.children.map((item, index) => (
                        <Link href={item.path} key={index}>
                          <a className='pb-10'>{item.name}</a>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={menuItem.path}>
                    <a className='py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between'>
                      <p className='inline-block text-footnote light'>
                        {menuItem.name}
                      </p>
                    </a>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </Scrollbars>
    </Drawer>
  )
}
