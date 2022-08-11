import React from 'react';
import Image from 'next/image';

// Import Image
import Poin from '../../../assets/images/about/poin.png';
import Decoration7 from '../../../assets/images/about/decoration-7.png';
import { Slide } from 'react-awesome-reveal';

const descData = [
    {
        description: 'Creating the best work by providing products and services high quality,supported by professional HR.',
        image: Poin
    },
    {
        description: 'Delivering the best ecosystem for employees to create creative ideas into useful works.',
        image: Poin
    },
    {
        description: `Become a solution to realize client's wishes through industry digital and creative.`,
        image: Poin
    },
    {
        description: 'Develop cooperation and synergy with other industry players.',
        image: Poin
    },
]

const Mission = () => {
    return (
        <section className="pt-32 mb-44">
            <div className="w-full mx-auto max-w-7xl relative z-2 px-4">
                <div className="absolute top-16 right-0 z-[-1]">
                    <Image src={Decoration7} />
                </div>
                <Slide direction='up' triggerOnce>
                    <div className="flex flex-col justify-center items-center m-0 mb-10">
                        <div
                            className="text-center text-3xl lg:text-5xl"
                            style={{ fontFamily: 'Abril Fatface, cursive' }}
                        >
                            <span className='text-transparent stroke__font'>Our </span>
                            <span>Mission</span>
                        </div>
                        <div className="w-[40px] mt-1 mb-4 bg-black h-[3px]"></div>
                        <div className="grid md:grid-cols-2 gap-6 md:mt-8 pt-10 pb-20 px-5 md:px-20">
                            {descData.map((item, index) => (
                                <MissionContainer
                                    key={index}
                                    img={item.image}
                                    text={item.description}
                                />
                            ))}
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    )
}

const MissionContainer = ({ img, text }) => {
    return (
        <div className="card md:w-full">
            <div className="flex flex-row">
                <div className="text-right w-1/6 lg:w-1/4">
                    <Image src={img} width={30} height={21} />
                </div>
                <p className="pl-5 w-full custom__font2 text-lg">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Mission;