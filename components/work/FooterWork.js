import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Decoration7 from '../../assets/images/work/work-software-7.png';

// Import Image
import ChevronRight from '../../assets/images/work/chevrons-right.png';
import { Slide } from 'react-awesome-reveal';

const FooterWork = () => {
    const router = useRouter();
    return (
        <section className="mt-10 mb-80 relative">
            <div className="bg-[#D6D6D6]">
                <div className="w-full mx-auto max-w-7xl">
                    {router.asPath === '/our-project/softdev' &&
                        <div className='relative'>
                            <div className='absolute left-4 bottom-[-600px]'>
                                <Image src={Decoration7} />
                            </div>
                        </div>
                    }
                    <div
                        className="flex flex-col lg:flex-row items-center justify-between py-10 px-2 lg:px-24"
                    >
                        <Slide triggerOnce>
                            <div className="flex flex-col mb-10 lg:mb-0">
                                <h4 className="custom__font2 text-4xl text-[#D4304B] mb-2">
                                    <strong>Not sure where to start?</strong>
                                </h4>
                                <p className="custom__font2 text-base">We’ll help you figure it out</p>
                            </div>
                            <Link href='/contact'>
                                <a>
                                    <div className="flex flex-row items-center">
                                        <div className="custom__font2">
                                            <h4 className="text-3xl mt hover:text-[#D4304B] animated__underline"><strong>Get in touch</strong></h4>
                                        </div>
                                        <div className="pt-3">
                                            <Image src={ChevronRight} />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </Slide>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterWork;