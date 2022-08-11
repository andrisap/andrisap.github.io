import React from 'react';
import Image from 'next/image';

import Tome from '../../../assets/images/about/tome.png';
import Decoration5 from '../../../assets/images/about/decoration-5.png';
import Decoration6 from '../../../assets/images/about/decoration-6.png';
import { Slide } from 'react-awesome-reveal';

const Vision = () => {
    return (
        <section className="pt-32">
            <div className="w-full mx-auto max-w-7xl relative z-2 px-4">
                <div className="absolute top-44 left-20 z-[-1]">
                    <Image src={Decoration6} />
                </div>
                <div className="absolute top-[0px] right-0 z-[-1]">
                    <Image src={Decoration5} />
                </div>
                <Slide direction='up' triggerOnce>
                    <div
                        className="flex flex-col items-center justify-center pt-10"
                    >
                        <div className="flex flex-col justify-center items-center m-0 mb-10">
                            <div
                                className="text-center text-3xl lg:text-5xl"
                                style={{ fontFamily: 'Abril Fatface, cursive' }}
                            >
                                <span className='text-transparent stroke__font'>Our </span>
                                <span>Vision</span>
                            </div>
                            <div className="w-[40px] mt-1 mb-4 bg-black h-[3px]"></div>
                            <div className="flex flex-row pt-5 justify-center items-center">
                                <div className="text-right w-1/4 relative">
                                    <Image
                                        // className="!top-[-20px] !right-0 z-[20]"
                                        src={Tome}
                                        height={30}
                                        width={41}
                                    />
                                </div>
                                <p
                                    className="w-full custom__font2 italic text-xl pl-2 pt-10"
                                // style={{ fontFamily: 'PT Sans, sans-serif', fontSize: '22px', fontStyle: 'italic' }}
                                >
                                    To be the best company Branding
                                    and Digital industry in Indonesia.
                                </p>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    )
}

export default Vision;