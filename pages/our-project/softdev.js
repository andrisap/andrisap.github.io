import React from 'react';
import ContainerBlock from '@components/ContainerBlock';
import Softdev from '@components/work/Softdev';
import HeaderWork from '@components/work/HeaderWork';
import FooterWork from '@components/work/FooterWork';
import ContainerWork from '@components/work/ContainerWork';
import Image from 'next/image';

import Decoration1 from '../../assets/images/work/work-software-1.png';
import Decoration2 from '../../assets/images/work/work-software-2.png';

const WorkSoftdev = () => {
    return (
        <ContainerBlock
            title="Our Project Software Development"
            description="Our Project Software Development Unicam Studio"
        >
            <ContainerWork>
                <HeaderWork isRed={true}>
                    <div className='absolute right-0 top-24'>
                        <Image src={Decoration1} />
                    </div>
                    <div className='absolute left-0 bottom-16'>
                        <Image src={Decoration2} />
                    </div>
                </HeaderWork>
                <Softdev />
            </ContainerWork>
            <FooterWork />
        </ContainerBlock>
    )
}

export default WorkSoftdev;