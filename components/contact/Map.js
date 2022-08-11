import React from 'react';
import Image from 'next/image';

// Image Import
import Point from '../../assets/images/contact/point.png';
import { Slide } from 'react-awesome-reveal';

const ContactMap = () => {
    return (
        <section className=" pb-20">
            <div className="w-full mx-auto max-w-7xl relative z-2 px-4">
                <Slide direction='up' triggerOnce>
                    <div
                        className="flex flex-col-reverse justify-start items-center md:items-start md:flex-row pt-20 pb-10"
                    >
                        {/* <div ref={mapContainer} className="w-[300px] h-[300px] md:w-[600px] md:h-[500px]" /> */}
                        <div className="w-[300px] h-[300px] md:w-[600px] md:h-[500px]">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.269786631208!2d110.46257351498633!3d-7.7611867791228315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5b688ab2a0e5%3A0xc04339c05bd5e9d5!2sPT%20Unicam%20Indonesia!5e0!3m2!1sid!2sid!4v1641446176308!5m2!1sid!2sid" className="w-full h-full" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                        </div>
                        {/* <div id="my-map" className="w-[300px] h-[300px] md:w-[600px] md:h-[500px]" /> */}
                        <div className="flex flex-col items-center md:items-start justify-start text-center md:text-left pl-2 md:pl-10">
                            <div className="custom__font2 text-[40px] mb-7">
                                <strong>PT Unicam Digital Pictvres</strong>
                            </div>
                            <div className="flex flex-row mb-10">
                                <div className="w-1/8">
                                    <Image src={Point} />
                                </div>
                                <div className="custom__font2 text-base md:text-[18px] text-[#979797] pl-2 lg:pl-5 w-full">
                                    <p className='text-2xl text-black leading-[0.95] mb-2'>Headquarter</p>
                                    Jl. Dhuri, Tirtomartani, Kalasan, Duri, <br />
                                    Tirtomartani, Sleman, Kabupaten Sleman, <br />
                                    Daerah Istimewa Yogyakarta 55571
                                </div>
                            </div>
                            <div className="flex flex-row mb-5">
                                <div className="w-1/8">
                                    <Image src={Point} />
                                </div>
                                <div className="custom__font2 text-base md:text-[18px] text-[#979797] pl-2 lg:pl-5 w-full">
                                    <p className='text-2xl text-black leading-[0.95] mb-2'>Respresentative Office</p>
                                    Jl. Bunga, Pikgondeng, Condongcatur, <br />
                                    Depok, Sleman, Yogyakarta 55571
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    )
}

export default ContactMap;