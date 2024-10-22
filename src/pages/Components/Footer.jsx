import React from "react";
import Instagram from '../../assets/Footer/Instagram.svg';
import Facebook from '../../assets/Footer/Facebook.svg';
import Linkedin from '../../assets/Footer/LinkedIn.svg';
import Pintrest from '../../assets/Footer/Pintrest.svg';

const Footer = () => {
    return (
        <>
            <div className='bg-[#949978] opacity-[75%] z-[-1] py-[5rem] w-full cursor-default'>
                <div className='container px-8'>
                    <div className='flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem]'>
                        <div className='flex flex-col w-[50%] gap-4'>
                            {/* Logo here */}
                            <p className='text-[25px] font-bold'>Studio Policies</p>
                            <p className='text-[25px] font-bold'>FAQs</p>
                            <p className="text-[18px] color-[#000] font-medium opacity-100">
                            Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.
                            </p>
                            <div className='flex flex-wrap gap-4'>
                                <div className='text-[18px] font-medium flex gap-5'>
                                    <img className='Blogs' src={Instagram} alt='Instagram'/>
                                    <img className='Blogs' src={Facebook} alt='Facebook'/>
                                    <img className='Blogs' src={Linkedin} alt='Linkedin'/>
                                    <img className='Blogs' src={Pintrest} alt='Pintrest'/>
                                </div>
                            </div>
                                <p className='text-[18px] font-medium '>Inspired by <a href='https://www.caretopilates.com/' target='_blank' className='hover:text-white ease-in duration-200'>Care to Pilates</a> | Boulder, CO</p>
                        </div>
                        <div className='flex flex-col gap-4 relative'>
                            <p className='text-[22px] font-bold'>
                                Our Classes
                            </p>
                            <span className='top-[33px] absolute w-[60px] h-[4px] bg-[#3E5C47]'></span>
                            <p className='text-[16px] hover:text-[#fff] ease-in duration-200 cursor-pointer text-[#000] font-medium hover:font-bold'>
                                Foundation
                            </p>
                            <p className='text-[16px] hover:text-[#fff] ease-in duration-200 cursor-pointer text-[#000] font-medium hover:font-bold'>
                                Water
                            </p>
                            <p className='text-[16px] hover:text-[#fff] ease-in duration-200 cursor-pointer text-[#000] font-medium hover:font-bold'>
                                Fire
                            </p>
                            <p className='text-[16px] hover:text-[#fff] ease-in duration-200 cursor-pointer text-[#000] font-medium hover:font-bold'>
                                Air
                            </p>
                        </div>
                        <div className='flex flex-col gap-4 relative'>
                        <p className='text-[22px] font-bold'>
                                Working Hours
                            </p>
                            <span className='top-[33px] absolute w-[60px] h-[4px] bg-[#3E5C47]'></span>
                            <p className='text-[16px]  text-[#000] font-bold'>
                                Monday - Friday:
                            </p>
                            <p className='text-[16px] text-[#000] font-medium'>
                                9:00am - 7:00pm
                            </p>
                            <p className='text-[16px]  text-[#000] font-bold'>
                                Saturday:
                            </p>
                            <p className='text-[16px] text-[#000] font-medium'>
                                9:00am - 2:00pm
                            </p>
                            <p className='text-[16px]  text-[#000] font-bold'>
                               Sunday - Closed
                            </p>
                        </div>
                    </div>
               </div>
            </div>
        </>
    )
}

export default Footer