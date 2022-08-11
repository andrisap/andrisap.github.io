import React from 'react';
import ContainerBlock from '@components/ContainerBlock';
import HeaderWork from '@components/work/HeaderWork';
import Design from '@components/work/Design';
import FooterWork from '@components/work/FooterWork';
// import ContainerWork from '@components/work/ContainerWork';
import Image from 'next/image';
import Decoration1 from '../../assets/images/work/work-dg-1.png';
import Decoration2 from '../../assets/images/work/work-dg-2.png';

const WorkDesign = () => {
    return (
        <ContainerBlock
            title="Our Project Design Grafis"
            description="Our Project Design Grafis Unicam Studio"
        >
            <HeaderWork isRed={true}>
                <div className='absolute right-0 top-36'>
                    <Image src={Decoration1} />
                </div>
                <div className='absolute left-0 bottom-10'>
                    <Image src={Decoration2} />
                </div>
            </HeaderWork>
            <Design />
            <FooterWork />
        </ContainerBlock>
    )
}

export default WorkDesign;