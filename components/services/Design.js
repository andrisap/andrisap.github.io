import React from 'react'
import ServiceContentHero from '@components/services/content/Hero'
import ServiceContentHeader from '@components/services/content/Header'
import ServiceContentList from '@components/services/content/List'

const hero = {
  title: 'Graphic Design',
  description:
    '<span>Creative Design - </span><span className="design1">Corporate Creative Design - </span><span className="design2">Product Promotion Design - </span><span className="design3">Design and Printing Service</span>',
  image: 'graphicdesign',
}

const header = {
  titleStroke: 'What is a',
  titleNormal: 'Graphic Design?',
  description:
    'Graphic design is the profession and academic discipline whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives.',
  descriptionHTML:
    'Graphic design is the profession and academic discipline whose <br /> activity consists in projecting visual communications intended <br /> to transmit specific messages to social groups, with specific objectives.',
}

const contents = [
  {
    name: 'Creative Design',
    description:
      'Creative designer himself works in the field of marketing and advertising. they are the people who create various marketing and advertising materials such as brochures or product labels that provide information about the product.',
  },
  {
    name: 'Corporate Creative Design',
    description:
      "Corporate design includes the brand assets that make your company unique and stand out from the competition. A brand's company identity design is visually reflected in its logo, name, style guide, slogan, color palette, typography, uniforms, buildings, business cards, and more.",
  },
  {
    name: 'Product Promotion Design',
    description:
      'The Product Promotion means disseminating the information about the product, product line, brand and company to the prospective buyers with the intent to generate sales and develop a brand loyalty.',
  },
  {
    name: 'Design and Printing Service',
    description:
      'Print Services means digital printing, quick copy, and offset printing, including printing done in a print shop.',
  },
]

const color = 'dark'

const ServicesDesign = () => {
  return (
    <section className='relative overflow-hidden'>
      <ServiceContentHero hero={hero} />
      <div className='lg:max-w-7xl lg:mx-auto'>
        <ServiceContentHeader header={header} color={color}>
          <div className='absolute -top-48 -left-20 lg:left-0'>
            <img src='/images/decoration7.png' alt='decoration' />
          </div>
          <div className='absolute -bottom-96 -right-32 lg:-bottom-72 lg:right-0 transform rotate-180'>
            <img src='/images/circle6.png' alt='circle' />
          </div>
        </ServiceContentHeader>
        <ServiceContentList contents={contents} color={color}>
          <div className='absolute top-64 -left-8 transform rotate-180'>
            <img src='/images/circle5.png' alt='circle' />
          </div>
          <div className='absolute -bottom-72 lg:-bottom-20 -right-16 transform rotate-180'>
            <img src='/images/circle6.png' alt='circle' />
          </div>
          <div className='absolute -bottom-48 lg:-bottom-20 left-8'>
            <img src='/images/decoration8.png' alt='decoration' />
          </div>
        </ServiceContentList>
      </div>
    </section>
  )
}

export default ServicesDesign
