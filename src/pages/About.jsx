import React from "react";
import Machine from '../assets/About/Machine.png'
import Stretch from '../assets/About/stretch.svg';
import Sweat from '../assets/About/sweat.svg';
import Moulding from '../assets/About/moulding.svg';
import Core from '../assets/About/core.svg';

const About = () => {
    return (
        <>
            <section id='About'>
                <div className='container'>
                    <div>
                        <div className='overflow-x-clip w-full h-[770px] relative'>
                            <img src={Machine} alt='woman on pilates machine' title='woman on pilates machine' className='absolute bottom-0 z-20'/>
                            <div className='flex'>
                                <div className='absolute flex flex-col top-0 left-[10%] w-[50%] h-full py-[40px] px-[60px] '>
                                    <h1 className='text-[60px] text-[#000] my-4 z-10 uppercase font-bold w-[20rem] tracking-wider leading-[4.5rem] pb-5'>remember why you <span className='text-[#FFA366]'>started</span></h1>
                                    <p>At Elevate, we value control and proper alignment to keep the body healthy and pain free. Re-education is an important part of our mission. Our team is here to help you gain knowledge that you can apply to other workouts and everyday life.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="my-[2rem] mx-auto">
                    <div className='flex gap-32 justify-center flex-wrap pt-[3rem]'>
                        <img src={Stretch} alt='stretching person' className="scale-[.8] brightness-125 h-32 w-32"/>
                        <img src={Core} alt='person stretching their core' className="scale-[.8] brightness-125 h-32 w-32"/>
                        <img src={Sweat} alt='Sweating person' className="scale-[.8]  h-32 w-32"/>
                        <img src={Moulding} alt='Moulding person' className="scale-[.8] brightness-125 h-32 w-32"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;