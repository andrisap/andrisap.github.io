import React from 'react';
import Image from 'next/image';
import { Slide } from "react-awesome-reveal";

// import image
import Foto from '../../../assets/images/about/about.jpg';
import RandomLines from '../../../assets/images/about/decoration-8.png';
import BackImage from '../../../assets/images/about/decoration_about_us.png';
import Decoration4 from '../../../assets/images/about/decoration-4.png';

const Description = () => {
    return (
        <section className="pt-24 pb-32">
            <div className="w-full mx-auto max-w-7xl relative z-2 px-4">
                <div className="absolute top-96 -left-20 z-[-1]">
                    <Image src={Decoration4} />
                </div>
                <Slide direction='up' triggerOnce>
                    <div className="block lg:flex lg:flex-row pt-20 pb-10 mx-auto px-2 lg:px-1 justify-between items-center">
                        <div
                            className="lg:w-[515px] m-0 p-0 custom__font2 text-2xl"
                        >
                            <div className="w-[64px] mt-1 mb-4 bg-[#D4304B] h-[3px]"></div>
                            <h3 className="custom__font2 text-[22px]">
                                <strong>UNICAM STUDIO <br /> BRAND CONSULTING AND DIGITAL FACTORY</strong>
                            </h3>
                            <p className="custom__font2 text-lg text-left leading-[32px] mb-[30px] lg:pr-[30px]">
                                Is branding consulting company and digital in the
                                field of manufacturing services Software, Content
                                Production, Design Graphics, and Social Media
                                headquartered in Yogyakarta.  Founded in May 2019,
                                with a spirit for contributing positive for MSMEs,
                                Industry, Technology and Education. We want to
                                contribute positively by providing branding and digital,
                                which fits the Tagline we are "Brand Consulting and
                                Digital Factory" with the best quality of products.
                            </p>
                        </div>
                        <div className="mt-14 w-11/12 sm:w-1/2 transform hover:scale-105 transition duration-2000 ease-out">
                            <div
                                // style={{ boxShadow: '35px -25px 1px 5px #d4304b' }} sm:w-[400px] md:w-[470px]
                                className="relative w-11/12"
                            >
                                <Image src={Foto} className="rounded-2xl" />
                            </div>
                            <div className="absolute right-4 -bottom-10">
                                <Image src={RandomLines} />
                            </div>
                            <div className="absolute w-[90%] right-0 -top-8 z-[-1] pr-2">
                                <Image src={BackImage} />
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    )
}

export default Description;