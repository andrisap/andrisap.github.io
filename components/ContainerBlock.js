import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from '@components/layouts/Navbar'
import Navbar2 from '@components/layouts/Navbar2'
import Footer from '@components/layouts/Footer'

const ContainerBlock = ({ children, isFooter, ...customMeta }) => {
  const router = useRouter()

  const meta = {
    title: 'Unicam Studio',
    description: `Brand Consulting and Digital Factory`,
    image: '/favicon2.png',
    type: 'website',
    ...customMeta,
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index'></meta>
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://unicamstudio.com${router.asPath}`}
        />
        <link
          rel='canonical'
          href={`https://unicamstudio.com${router.asPath}`}
        />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Unicam Studio' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon2.png"
        />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>
      <Navbar2
        isWhite={
          router.asPath === '/' ||
          router.asPath.includes('services')
            ? true
            : false
        }
      />
      <main className='dark:bg-gray-800 w-full'>{children}</main>
      {!isFooter && <Footer />}
    </div>
  )
}

export default ContainerBlock
