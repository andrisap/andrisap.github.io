import React from 'react';
import Image from 'next/image';

// Import Image 
import Ypti from '../../assets/images/work/ypti.jpg';
import Stechoq from '../../assets/images/work/stechoq.jpg';
import Inamas from '../../assets/images/work/inamas.jpg';
import Decoration2 from '../../assets/images/work/work-content-2.png';
import Decoration3 from '../../assets/images/work/work-content-3.png';
import Decoration4 from '../../assets/images/work/work-content-4.png';
import Decoration5 from '../../assets/images/work/work-content-5.png';
import Decoration6 from '../../assets/images/work/work-content-6.png';
import Decoration7 from '../../assets/images/work/work-content-7.png';
import Decoration8 from '../../assets/images/work/work-content-8.png';
import Decoration9 from '../../assets/images/work/work-content-9.png';
import Decoration10 from '../../assets/images/work/work-content-10.png';
import { Slide } from 'react-awesome-reveal';

const contentData = [
    {
        video: '/videos/MBKM_Stechoq.mp4',
        title: 'Client : PT STECHOQ ROBOTIKA INDONESIA',
        designation: 'Services : Project Video',
        aspect: 'aspect-w-3 aspect-h-2'
    },
    {
        video: '/videos/Company_Profile_YPTI.mp4',
        title: 'Client : PT Yogya Presisi Tehnikatama Industri',
        designation: 'Services : Company Profile',
        aspect: 'aspect-w-3 aspect-h-2'
    },
    {
        video: '/videos/Company_Profile_Unicam.mp4',
        title: 'Client : PT Unicam Indonesia',
        designation: 'Services : Company Profile',
        aspect: 'aspect-w-16 aspect-h-9'
    },
    {
        video: '/videos/IC3F_Inastek.mp4',
        title: 'Client : PT Inamas Sintesis Teknologi',
        designation: 'Services : Mini Company Profile',
        aspect: 'aspect-w-3 aspect-h-2'
    },
    {
        image: Ypti,
        title: 'Client : PT Yogya Presisi Tehnikatama Industri',
        designation: 'Services : Corporate Photography'
    },
    {
        image: Stechoq,
        title: 'Client : PT Stechoq Robotika Indonesia',
        designation: 'Services : Industrial Photography'
    },
    {
        image: Inamas,
        title: 'Client : PT Inamas Sintesis Teknologi',
        designation: 'Services : Industrial Photography'
    },
]

const WorkContent = () => {
    return (
        <section className="pt-40">
            <div className="w-full mx-auto max-w-7xl relative z-2 px-4">
                <div className='absolute right-0 -top-44'>
                    <Image src={Decoration2} />
                </div>
                <div className='absolute left-0 -top-24'>
                    <Image src={Decoration3} />
                </div>
                <div className='absolute right-0 top-[500px]'>
                    <Image src={Decoration4} />
                </div>
                <div className='absolute left-0 top-[500px]'>
                    <Image src={Decoration5} />
                </div>
                <div className='absolute left-0 top-[1000px]'>
                    <Image src={Decoration6} />
                </div>
                <div className='absolute right-40 bottom-[700px]'>
                    <Image src={Decoration7} />
                </div>
                <div className='absolute left-20 bottom-52'>
                    <Image src={Decoration8} />
                </div>
                <div className='absolute right-20 bottom-20'>
                    <Image src={Decoration9} />
                </div>
                <div className='absolute right-20 -bottom-96'>
                    <Image src={Decoration10} />
                </div>
                <Slide>
                    <div className="flex flex-col justify-items-start items-start">
                        <div className="w-[64px] h-[3px] bg-[#D4304B] mt-1 mb-4"></div>
                        <p className="custom__font2 text-4xl"><strong>Content Production</strong></p>
                    </div>
                </Slide>
                <div
                    className="flex flex-col items-center justify-center pt-20 pb-10"
                >
                    {
                        contentData.map((item, index) => (
                            <ContentContainer
                                key={index}
                                image={item.image}
                                title={item.title}
                                designation={item.designation}
                                video={item.video}
                                aspect={item.aspect}
                            />
                        ))
                    }
                </div >
            </div >
        </section >
    )
}

const ContentContainer = ({ image, title, designation, video, aspect }) => {
    return (
        <>
            {
                image ?
                    <Slide direction='up' triggerOnce>
                        <div className="text-center pb-20 transform hover:scale-105 transition duration-2000 ease-out">
                            <Image src={image} height={391} width={650} />
                            <p className="custom__font2 text-lg md:text-2xl pt-5"><strong>{title}</strong></p>
                            <p className="custom__font2 text-base md:text-lg text-[#979797]">{designation}</p>
                        </div>
                    </Slide>
                    :
                    <Slide direction='up' triggerOnce>
                        <div className="text-center pb-20 w-full h-full">
                            <div className={`video-responsive `}>
                                {/* <iframe
                                    width="499"
                                    height="300"
                                    src={video}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Embedded youtube"
                                /> */}
                                <video autoPlay={false} controls={true} className='w-[650px] h-auto rounded-[15px]' controlsList="nodownload">
                                    <source src={video} />
                                </video>
                            </div>
                            <p className="custom__font2 text-lg md:text-2xl pt-5"><strong>{title}</strong></p>
                            <p className="custom__font2 text-base md:text-lg text-[#979797]">{designation}</p>
                        </div>
                    </Slide>
            }
        </>
    )
}

export default WorkContent;