import React from 'react';
import ContainerBlock from '@components/ContainerBlock';
import Sosmed from '@components/work/Sosmed';
import HeaderWork from '@components/work/HeaderWork';
import FooterWork from '@components/work/FooterWork';
// import ContainerWork from '@components/work/ContainerWork';
import Image from 'next/image';
import Decoration1 from '../../assets/images/work/work-sosmed-1.png';
import Decoration2 from '../../assets/images/work/work-sosmed-2.png';

const WorkSosmed = () => {
    return (
        <ContainerBlock
            title="Our Project Sosial Media"
            description="Our Project Sosial Media Unicam Studio"
        >
            <HeaderWork>
                <div className='absolute right-20 top-48'>
                    <Image src={Decoration1} />
                </div>
                <div className='absolute left-0 bottom-14'>
                    <Image src={Decoration2} />
                </div>
            </HeaderWork>
            <Sosmed />
            <FooterWork />
        </ContainerBlock>
    )
}

export default WorkSosmed;