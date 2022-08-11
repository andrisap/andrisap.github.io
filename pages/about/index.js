import React from 'react'
import AboutUs from '@components/about/us/Us'
import Description from '@components/about/us/Description'
import Vision from '@components/about/us/Vision'
import ContainerBlock from '@components/ContainerBlock'
import Mission from '@components/about/us/Mission'
import Culture from '@components/about/us/Culture'
import Reason from '@components/about/us/Reason'
import ContainerUs from '@components/about/us/ContainerUs';

// export async function getServerSideProps() {
//   // console.log("rendering now");
//   return { props: {} };
// }

const about = () => {
  return (
    <ContainerBlock title='About Us' description='About Us Unicam Studio'>
      <AboutUs />
      <Description />
      <Vision />
      <Mission />
      <Culture />
      <Reason />
    </ContainerBlock>
  )
}

export default about
