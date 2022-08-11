import React from 'react';
import Image from 'next/image';

// import Image
import Agile from '../../../assets/images/about/agile2.png';
import Innovation from '../../../assets/images/about/innovatiton2.png';
import Speed from '../../../assets/images/about/speed2.png';
import Quality from '../../../assets/images/about/quality2.png';
import { Slide } from 'react-awesome-reveal';

const cultureData = [
    {
        image: Agile,
        title: 'Agile',
        description: 'We are ready to customize yourself on change.',
    },
    {
        image: Innovation,
        title: 'Innovation',
        description: 'Providing the best innovation right products and services for customers.',
    },
    {
        image: Speed,
        title: 'Speed',
        description: 'Giving speed work with according to Timeline.',
    },
    {
        image: Quality,
        title: 'Quality',
        description: 'We are committed provide best qualityin providing products and services.',
    },
]

const Culture = () => {
    return (
        <section className="pt-[90px] bg-[#F6F6F6] mb-60">
            <Slide direction='up' triggerOnce>
                <div className="w-full mx-auto max-w-7xl relative z-2 px-4">
                    {/* <div className="absolute bottom-[650px] -right-96 z-[-1]">
                        <Image src={Decoration5} />
                    </div> */}
                    <div className="flex flex-col justify-center items-center m-0 mb-10">
                        <div className='text-3xl md:text-5xl lg:text-7xl custom__font1 relative'>
                            <span className='text-transparent stroke__font'>Our </span>
                            <span
                                className={`relative mr-2 z-0
                                before:absolute before:w-6
                                before:h-6 before:top-1 md:before:top-4 before:-right-2 lg:before:top-6
                                lg:before:-right-2 lg:before:w-8 lg:before:h-8 before:bg-[#787777]
                                before:z-[-1]`}
                            >
                                Culture
                            </span>
                        </div>
                        <div className="w-[40px] mt-1 mb-4 bg-black h-[3px]"></div>
                        <div className="custom__font2 text-[36px] mt-8"><strong>{`'ASIQ'`}</strong></div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 lg:mt-20 pb-[90px]">
                            {cultureData.map((item, index) => (
                                <CultureContainer
                                    key={index}
                                    img={item.image}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Slide>
        </section>
    );
}

const CultureContainer = ({ img, title, description }) => {
    return (
        <div className="card md:w-full bg-white rounded-[20px] h-[411px] shadow-2xl flex flex-col justify-center items-center transform hover:scale-105 transition duration-2000 ease-out">
            <div className="h-[150px] pt-5">
                <Image src={img} objectFit='contain' height={120} width={200} />
            </div>
            <div className="h-[50px] my-1">
                <p className="text-2xl pt-2 custom__font2"><strong>{title}</strong></p>
            </div>
            <div className="mt-1 mb-5 h-[100px]">
                <p className="px-5 text-center custom__font2 text-lg">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Culture;