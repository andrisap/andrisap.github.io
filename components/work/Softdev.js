import React from 'react';
import Image from 'next/image';

// Import Image
import MockupSadikun from '../../assets/images/work/mockup-sadikun.jpg';
import MockupMedu from '../../assets/images/work/mockup-medu.jpg';
import WebTmmin from '../../assets/images/work/web-tmmin.jpg';
import WebUnicam from '../../assets/images/work/web-unicam.jpg';
import WebStechoq from '../../assets/images/work/web-stch.jpg';
import WebInastek from '../../assets/images/work/web-inastek.jpg';
import Decoration3 from '../../assets/images/work/work-software-3.png';
import Decoration4 from '../../assets/images/work/work-software-4.png';
import Decoration5 from '../../assets/images/work/work-software-5.png';
import Decoration6 from '../../assets/images/work/work-software-6.png';
import { Slide } from 'react-awesome-reveal';
// import Decoration7 from '../../assets/images/work/work-software-7.png';


const softdevData = [
    {
        image: MockupMedu,
        title: 'Client : PT Helber Elektronika Indonesia',
        designation: 'Services : Mobile Apps',
        description: ''
    },
    {
        image: MockupSadikun,
        title: 'Client : PT Sadikun Niagamas Raya',
        designation: 'Services : Mobile Apps',
        description: ''
    },
    // {
    //     image: WebTmmin,
    //     title: 'Client : PT TMMIN',
    //     designation: 'Services : Website',
    //     description: ''
    // },
    {
        image: WebUnicam,
        title: 'Client : PT Unicam Indonesia',
        designation: 'Services : Website',
        description: ''
    },
    {
        image: WebStechoq,
        title: 'Client : PT Stechoq Robotika Indonesia',
        designation: 'Services : Website',
        description: ''
    },
    {
        image: WebInastek,
        title: 'Client : PT Inamas Sintesis Indonesia',
        designation: 'Services : Landing Page',
        description: ''
    },
]

const WorkSoftdev = () => {
    return (
        <section className="pt-40">
            <div className="w-full mx-auto max-w-7xl relative px-4">
                <div className='absolute -right-20 -top-16'>
                    <Image src={Decoration3} />
                </div>
                <div className='absolute -left-20 top-[600px]'>
                    <Image src={Decoration4} />
                </div>
                <div className='absolute -right-20 bottom-[500px]'>
                    <Image src={Decoration5} />
                </div>
                <div className='absolute left-0 bottom-0'>
                    <Image src={Decoration6} />
                </div>
                {/* <div className='absolute left-0 bottom-[-650px]'>
                    <Image src={Decoration7} />
                </div> */}
                <Slide triggerOnce>
                    <div className="flex flex-col justify-items-start items-start">
                        <div className="w-[64px] h-[3px] bg-black mt-1 mb-4"></div>
                        <p className="custom__font2 text-4xl"><strong>Web Development</strong></p>
                    </div>
                </Slide>
                <div
                    className="flex flex-col items-center justify-center pt-10"
                >
                    {/* <div className="grid lg:grid-cols-2 gap-6 pb-20 mt-8"> */}
                    <div className="flex flex-row flex-wrap justify-center gap-6 pb-20 mt-8">
                        {softdevData.map((item, index) => (
                            <SoftdevComponent
                                key={index}
                                image={item.image}
                                title={item.title}
                                designation={item.designation}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const SoftdevComponent = ({ image, title, designation, description }) => {
    return (
        <div className="card w-full lg:w-[48%] text-center pb-10 transform hover:scale-105 transition duration-2000 ease-out">
            <Slide direction='up' triggerOnce>
                <div className="w-full text-center">
                    <Image src={image} />
                </div>
                <div className="text-center">
                    <p className="custom__font2 text-lg md:text-2xl pt-4"><strong>{title}</strong></p>
                    <p className="custom__font2 text-base md:text-lg text-[#979797] py-2">{designation}</p>
                    <p className="custom__font2 text-base md:text-lg py-2">{description}</p>
                </div>
            </Slide>
        </div>
    )
}

export default WorkSoftdev;