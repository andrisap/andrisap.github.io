import React from 'react';
import Image from 'next/image';

// Import Image 
import StechoqIg from '../../assets/images/work/stechoq-ig.jpg';
import InastekIg from '../../assets/images/work/inastek-ig.jpg';

import Decoration3 from '../../assets/images/work/work-sosmed-3.png';
import Decoration4 from '../../assets/images/work/work-sosmed-4.png';
import Decoration5 from '../../assets/images/work/work-sosmed-5.png';
import Decoration6 from '../../assets/images/work/work-sosmed-6.png';
import { Slide } from 'react-awesome-reveal';

const sosmedData = [
    {
        image: StechoqIg,
        title: 'Client : PT Stechoq Robotika Indonesia',
        designation: 'Services : Sosial Media Instagram ',
        description: 'Our stechoq instagram design is clean and simple to highlight the beautiful image Professional, Strong Responsible, and Reliable.',
    },
    {
        image: InastekIg,
        title: 'Client : PT Inamas Sintesis Teknologi',
        designation: 'Services : Sosial Media Instagram',
        description: 'Our Inastek Instagram design was made with Simple style, and Elegant but still illustrative to show the installation image professional and innovative.',
    },
]

const WorkSosmed = () => {
    return (
        <section className="pt-40 pb-32">
            <div className="w-full mx-auto max-w-7xl relative z-2 px-4">
                <div className='absolute right-0 -top-10'>
                    <Image src={Decoration3} />
                </div>
                <div className='absolute left-0 top-[470px]'>
                    <Image src={Decoration4} />
                </div>
                <div className='absolute right-0 -bottom-20'>
                    <Image src={Decoration5} />
                </div>
                <div className='absolute left-0 -bottom-56'>
                    <Image src={Decoration6} />
                </div>
                <Slide triggerOnce>
                    <div className="flex flex-col justify-items-start items-start">
                        <div className="w-[64px] h-[3px] bg-[#D4304B] mt-1 mb-4"></div>
                        <p className="custom__font2 text-4xl"><strong>Sosial Media Management</strong></p>
                    </div>
                </Slide>
                <div
                    className="flex flex-col items-center justify-center pb-10"
                >
                    {sosmedData.map((item, index) => (
                        <SosmedContainer
                            key={index}
                            image={item.image}
                            title={item.title}
                            designation={item.designation}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

const SosmedContainer = ({ image, title, designation, description }) => {
    return (
        <Slide direction='up' triggerOnce>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5 mt-[150px]">
                <div className="flex flex-col justify-center text-center lg:text-left lg:justify-start pr-5 lg:w-[500px]">
                    <p className="custom__font2 text-2xl"><strong>{title}</strong></p>
                    <p className="custom__font2 text-lg text-[#979797]"><strong>{designation}</strong></p>
                    <p className="custom__font2 text-lg mt-5">{description}</p>
                </div>
                <div className="pt-10 lg:pt-0 px-4 lg:px-10 text-center lg:text-left">
                    <Image src={image} width={510} height={350} className="transform hover:scale-105 transition duration-2000 ease-out" />
                </div>
            </div>
        </Slide>
    )
}

export default WorkSosmed;