import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Mail from '../../assets/images/contact/mail.png';
import Wa from '../../assets/images/contact/wa.png';
import Instagram from '../../assets/images/contact/instagram.png';
import Youtube from '../../assets/images/contact/youtube.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Decoration5 from '../../assets/images/contact/decoration-contact-5.png';
import Decoration6 from '../../assets/images/contact/decoration-contact-6.png';
import { Slide } from 'react-awesome-reveal';

const formData = [
    {
        image: Mail,
        icon: faEnvelope,
        name: 'admin@unicamstudio.com',
        path: 'mailto:admin@unicamstudio.com'
    },
    {
        image: Wa,
        icon: faWhatsapp,
        name: '+62 81225929178',
        path: 'https://api.whatsapp.com/send?phone=6281225929178&text=Hallo Unicam Studio!'
    },
    {
        image: Instagram,
        icon: faInstagram,
        name: 'unicam.studio',
        path: 'https://instagram.com/unicam.studio'
    },
    {
        image: Youtube,
        icon: faYoutube,
        name: 'unicamstudio',
        path: '#'
    },
]

const ContactForm = () => {
    return (
        <section className="pt-20 mb-80">
            <div className="w-full mx-auto max-w-7xl relative z-2 px-4">
                <div className='absolute left-40 -bottom-56'>
                    <Image src={Decoration5} />
                </div>
                <div className='absolute right-0 -bottom-96'>
                    <Image src={Decoration6} />
                </div>
                <Slide direction='up' triggerOnce>
                    <div
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                        <div className="flex flex-col justify-between md:ml-4">
                            <header>
                                <h1 className="custom__font2 text-[58px]">
                                    <strong>Let’s start <br /> Our Project! </strong>
                                </h1>
                            </header>
                            <div className="icons-container inline-flex flex-col my-10">
                                {formData.map((item, index) => (
                                    <div className="flex flex-row items-center space-x-6 px-4 py-3" key={index}>
                                        {/* <Image src={item.image} /> */}
                                        <div className="w-[25px] transform hover:scale-105 transition duration-2000 ease-out">
                                            <FontAwesomeIcon icon={item.icon} size='2x' />
                                        </div>
                                        <Link href={item.path}>
                                            <a className="custom__font2 font-light text-sm hover:text-red-700" target="_blank">
                                                {item.name}
                                            </a>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <form className="form rounded-lg bg-white p-4 flex flex-col md:col-span-2 lg:pr-32">
                            <div className="flex items-center border-b border-teal-500 py-6 z-[10]">
                                <input className="custom__font2 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="text" placeholder="Your Name" aria-label="Full name" />
                            </div>
                            <div className="flex items-center border-b border-teal-500 py-6 z-[10]">
                                <input className="custom__font2 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="text" placeholder="Corporate Email" aria-label="Your email" />
                            </div>
                            <div className="flex items-center border-b border-teal-500 py-6 z-[10]">
                                <input className="custom__font2 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="text" placeholder="Your Phone Number" aria-label="Your email" />
                            </div>
                            <div className="flex items-center border-b border-teal-500 py-6 z-[10]">
                                <input className="custom__font2 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="text" placeholder="Company Name" aria-label="Your email" />
                            </div>
                            <div className="flex items-center border-b border-teal-500 py-6 z-[10]">
                                <input className="custom__font2 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="text" placeholder="Your Message" aria-label="Your email" />
                            </div>
                            <div className="flex justify-end z-[10]">
                                <button
                                    type="submit"
                                    className="custom__font2 bg-[#D4304B] cursor-pointer hover:bg-[#c20727] rounded-[31px] font-bold block text-xs md:text-base py-2 px-2 lg:py-3 lg:px-6 w-max text-gray-50 mt-8"
                                >
                                    Submit!
                                </button>
                            </div>
                        </form>
                    </div>
                </Slide>
            </div>
        </section>
    )
}

export default ContactForm;