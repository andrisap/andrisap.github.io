import React from 'react'
import AboutClient from '@components/about/Client'
import ContainerBlock from '@components/ContainerBlock'

const about = () => {
  return (
    <ContainerBlock
      title='About Client'
      description='About Client Unicam Studio'
    >
      <AboutClient />
    </ContainerBlock>
  )
}

export default about
