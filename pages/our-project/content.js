import React from 'react';
import Image from 'next/image';
import ContainerBlock from '@components/ContainerBlock';
import Content from '@components/work/Content';
import HeaderWork from '@components/work/HeaderWork';
import FooterWork from '@components/work/FooterWork';
import ContainerWork from '@components/work/ContainerWork';
import Decoration1 from '../../assets/images/work/work-content-1.png';

const WorkContent = () => {
    return (
        <ContainerBlock
            title="Our Project Content Production"
            description="Our Project Content Production Unicam Studio"
        >
            <HeaderWork>
                <div className='absolute left-20 top-56'>
                    <Image src={Decoration1} />
                </div>
            </HeaderWork>
            <Content />
            <FooterWork />
        </ContainerBlock>
    )
}

export default WorkContent;