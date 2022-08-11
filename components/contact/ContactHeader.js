import React from 'react';
import Image from 'next/image';

// Import Image
import Decoration1 from '../../assets/images/contact/decoration-contact-1.png';
import Decoration2 from '../../assets/images/contact/decoration-contact-2.png';
import Decoration3 from '../../assets/images/contact/decoration-contact-3.png';
import Decoration4 from '../../assets/images/contact/decoration-contact-4.png';
import { Slide } from 'react-awesome-reveal';


const ContactHeader = () => {
    return (
        <section className="pt-16">
            <div className="w-full mx-auto max-w-7xl relative z-2 px-4">
                <div className='absolute left-0 top-32'>
                    <Image src={Decoration1} />
                </div>
                <div className='absolute right-0 top-[600px]'>
                    <Image src={Decoration2} />
                </div>
                <div className='absolute right-0 top-[950px]'>
                    <Image src={Decoration3} />
                </div>
                <div className='absolute -left-20 top-[1520px]'>
                    <Image src={Decoration4} />
                </div>
                <Slide direction='up' triggerOnce>
                    <div
                        className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] lg:h-[780px] text-3xl sm:text-6xl lg:text-[80px]"
                    >
                        {/* #D4304B 787777 */}
                        <div className='custom__font1 relative'>
                            <span
                                className={`relative mr-2 
                                before:absolute before:w-6 
                                before:h-6 before:-top-1 before:-left-2 sm:before:-top-1 sm:before:-left-3
                                lg:before:top-2 lg:before:-left-1 sm:before:w-[42px] sm:before:h-[42px] before:bg-[#D4304B]
                                before:z-[-1]`}
                            >
                                Get in 
                            </span>
                            <span className="text-transparent stroke__font">Touch</span>
                        </div>
                        <div className="w-10 mt-1 mb-4 bg-black h-1"></div>
                        <div>
                            <p
                                className="custom__font2 text-[20px]"
                            >
                                Proudly served some of the most famous brands
                            </p>
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    )
}

export default ContactHeader;