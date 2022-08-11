import React from 'react';
import Image from 'next/image';
import { Slide } from "react-awesome-reveal";

// import image
import Decoration1 from '../../../assets/images/about/decoration-1.png';
import Decoration2 from '../../../assets/images/about/decoration-2.png';
import Decoration3 from '../../../assets/images/about/decoration-3.png';

const AboutUs = () => {
    return (
        <section className="pt-16">
            <div className="w-full mx-auto max-w-7xl relative z-2 px-4">
                <div className="absolute top-14 right-20">
                    <Image src={Decoration1} />
                </div>
                <div className="absolute top-[550px] left-10">
                    <Image src={Decoration2} />
                </div>
                <div className="absolute top-[600px] right-0">
                    <Image src={Decoration3} />
                </div>
                <Slide direction='up' triggerOnce>
                    <div
                        className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] lg:h-[780px] text-3xl sm:text-6xl lg:text-[80px]"
                    >
                        <div className="flex flex-col justify-center items-center">
                            <div className='custom__font1 relative gap-3'>
                                <span
                                    className={`relative mr-2
                                before:absolute before:w-[16px] 
                                before:h-[16px] before:top-1 before:-left-1 sm:before:-top-1 sm:before:-left-5
                                lg:before:-left-4 lg:before:top-2 sm:before:w-[42px] sm:before:h-[42px] before:bg-[#D4304B]
                                before:z-[-1]`}
                                >
                                    Who
                                </span>
                                <span className='text-transparent stroke__font'>We </span>
                                <span>Are</span>
                            </div>
                            <div className="w-10 mt-1 mb-4 bg-black h-1"></div>
                            <div>
                                <p
                                    className="custom__font2 text-base md:text-lg lg:text-xl"
                                >
                                    We develop innovation with affordable, flexible, high
                                    <br />
                                    technology, adequate quality and excellent services.
                                </p>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    )
}

export default AboutUs;