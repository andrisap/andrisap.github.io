import React from 'react';
import Image from 'next/image';

// Import Image
import LogoInastek from '../../assets/images/work/logo-inastek.jpg';
import LogoDnac from '../../assets/images/work/logo-dnac.jpg';
import LogoStechoq from '../../assets/images/work/logo-stechoq.jpg';
import CardStechoq from '../../assets/images/work/card-stechoq.jpg';
import CardYpti from '../../assets/images/work/card-ypti.jpg';
import BcardStechoq from '../../assets/images/work/bussiness-card-stechoq.jpg';
import BcardInastek from '../../assets/images/work/bussiness-card-inastek.jpg';
import PosterStechoq from '../../assets/images/work/poster-stechoq.jpg';
import PosterInastek from '../../assets/images/work/poster-inastek.jpg';
import Decoration3 from '../../assets/images/work/work-dg-3.png';
import Decoration4 from '../../assets/images/work/work-dg-4.png';
import Decoration5 from '../../assets/images/work/work-dg-5.png';
import Decoration6 from '../../assets/images/work/work-dg-6.png';
import Decoration7 from '../../assets/images/work/work-dg-7.png';
import { Slide } from 'react-awesome-reveal';

const designData = [
    {
        image: LogoDnac,
        title: 'Client : DNAcademy',
        designation: 'Services : Company Logo',
        description: 'We introduce the image of Dnacademy which is humanist, trustworthy, and ready to face challenges'
    },
    {
        image: LogoStechoq,
        title: 'Client : PT Stechoq Robotika Indonesia Jakarta',
        designation: 'Services : Company Logo',
        description: 'We show the identity of stechoq who have the passion to grow, progress, and are ready to face obstacles to be the best'
    },
    {
        image: BcardStechoq,
        title: 'Client : PT Stechoq Robotika Indonesia',
        designation: 'Services : Business Card',
        description: ''
    },
    {
        image: BcardInastek,
        title: 'Client : PT Inamas Sintesis Teknologi',
        designation: 'Services : Business Card',
        description: ''
    },
    {
        image: CardYpti,
        title: 'Client : PT Yogya Presisi Tehnikata Industri',
        designation: 'Services : Id Card',
        description: ''
    },
    {
        image: CardStechoq,
        title: 'Client : PT Stechoq Robotika Indonesia',
        designation: 'Services : Id Card',
        description: ''
    },
    {
        image: PosterStechoq,
        title: 'Client : PT Stechoq Robotika Indonesia',
        designation: 'Services : Job vacancies poster',
        description: ''
    },
    {
        image: PosterInastek,
        title: 'Client : PT Inamas Sintesis Teknologi',
        designation: 'Services : Job vacancies poster',
        description: ''
    },
]

const WorkDesign = () => {
    return (
        <section className="pt-40">
            <div className="w-full mx-auto max-w-7xl relative z-2 px-4">
                <div className='absolute right-0 -top-36'>
                    <Image src={Decoration3} />
                </div>
                <div className='absolute left-0 top-[650px]'>
                    <Image src={Decoration4} />
                </div>
                <div className='absolute right-0 top-[1100px]'>
                    <Image src={Decoration5} />
                </div>
                <div className='absolute left-0 bottom-[1200px]'>
                    <Image src={Decoration6} />
                </div>
                <div className='absolute -left-20 bottom-0'>
                    <Image src={Decoration7} />
                </div>
                <Slide triggerOnce>
                    <div className="flex flex-col justify-items-start items-start">
                        <div className="w-[64px] h-[3px] bg-black mt-1 mb-4"></div>
                        <p className="custom__font2 text-4xl"><strong>Design Grafis</strong></p>
                    </div>
                </Slide>
                <div
                    className="flex flex-col justify-between pt-10"
                >
                    <div className="grid lg:grid-cols-2 gap-6 pb-20 mt-8">
                        {designData.map((item, index) => (
                            <DesignComponent
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

const DesignComponent = ({ image, title, designation, description }) => {
    return (
        <Slide direction='up' triggerOnce>
            <div className="card w-full pb-10 transform hover:scale-105 transition duration-2000 ease-out">
                <div className="w-full text-center">
                    <Image src={image} />
                </div>
                <div className="text-center px-10">
                    <p className="custom__font2 text-2xl pt-4"><strong>{title}</strong></p>
                    <p className="custom__font2 text-lg text-[#979797] py-2">{designation}</p>
                    <p className="custom__font2 text-lg py-2 mx-1 lg:mx-10">{description}</p>
                </div>
            </div>
        </Slide>
    )
}

export default WorkDesign;