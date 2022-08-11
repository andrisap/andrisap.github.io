import React from 'react';
import Image from 'next/image';

// Import Image
import Decoration9 from '../../../assets/images/about/decoration-9.png';
import Decoration10 from '../../../assets/images/about/decoration-10.png';
import Decoration11 from '../../../assets/images/about/decoration-11.png';
import Decoration12 from '../../../assets/images/about/decoration-12.png';
import Trust from '../../../assets/images/about/trust2.png';
import MasterFile from '../../../assets/images/about/master-file2.png';
import Consultation from '../../../assets/images/about/consultation2.png';
import Guaranteed from '../../../assets/images/about/guaranted2.png'
import { Slide } from 'react-awesome-reveal';

const reasonData = [
    {
        image: Trust,
        title: 'TRUST',
        description: 'With an efficient team work system and trying to give the best for our clients.',
    },
    {
        image: MasterFile,
        title: 'MASTER FILE',
        description: 'An editable master file is provided to make it easier for clients to print and repair files.',
    },
    {
        image: Consultation,
        title: 'CONSULTATION',
        description: 'You are free to consult with our team so that our team understands your needs.',
    },
    {
        image: Guaranteed,
        title: 'GUARANTEED',
        description: 'We guarantee customer satisfaction to maintain the quality of our services.',
    },
]

const Reason = () => {
    return (
        <section className="pt-2 mb-96">
            <div className="w-full mx-auto max-w-7xl relative z-2 px-4">
                <div className="absolute -top-20 left-0 z-[-1]">
                    <Image src={Decoration9} />
                </div>
                <div className="absolute top-20 right-10 z-[-1]">
                    <Image src={Decoration10} />
                </div>
                <div className="absolute -bottom-64 left-0 z-[-1]">
                    <Image src={Decoration11} />
                </div>
                <div className="absolute -bottom-20 right-40 z-[-1]">
                    <Image src={Decoration12} />
                </div>
                <Slide direction='up' triggerOnce>
                    <div
                        className="flex flex-col items-center justify-center pt-10"
                    >
                        <div className='text-3xl md:text-5xl lg:text-7xl custom__font1 relative'>
                            <span
                                className={`relative mr-2
                                before:absolute before:w-6 
                                before:h-6 before:top-0 md:before:top-2 before:-left-2 lg:before:top-4
                                lg:before:-left-2 lg:before:w-8 lg:before:h-8 before:bg-[#D4304B]
                                before:z-[-1]`}
                            >
                                Why
                            </span>
                            <span className='text-transparent stroke__font'>Unicam </span>
                            <span>Studio?</span>
                        </div>
                        <div className="w-[40px] mt-1 mb-4 bg-black h-[3px]"></div>
                        <div className="flex flex-wrap gap-6 mt-12 lg:mt-28 pb-20 w-full justify-between">
                            {reasonData.map((item, index) => (
                                <ReasonContainer
                                    key={index}
                                    img={item.image}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    )
}

const ReasonContainer = ({ img, title, description }) => {
    return (
        //  xl:h-[130px] w-[575px]
        <div className="card w-full lg:w-[48%] bg-white rounded-[20px] shadow-2xl block text-center sm:text-left sm:flex sm:flex-row px-4 py-4 transform hover:scale-105 transition duration-2000 ease-out">
            <Image src={img} width={93} height={94} className="object-contain" />
            <div className="flex flex-col pl-3 lg:w-[400px] ">
                <p className="text-[22px] custom__font2"><strong>{title}</strong></p>
                <p className="text-[18px] custom__font2">{description}</p>
            </div>
        </div>
    )
}

export default Reason;