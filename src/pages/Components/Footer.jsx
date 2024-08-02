import React from "react";
import FB from '../../assets/Reviews/Facebook.png'
import Insta from '../../assets/Reviews/Instagram.png';
import LN from '../../assets/Reviews/Linkedin.png';
import Mail from '../../assets/Reviews/Mail.png';

const Footer = () => {
    return (
        <>
            <div className='bg-[#949978] opacity-[75%] z-[-1] py-[5rem] w-screen'>
                <div className='container px-8'>
                    <div className='flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem]'>
                        <div className='flex flex-col w-[50%] gap-7'>
                            {/* Logo here */}
                            <p className='text-[25px] font-bold'>Studio Policies</p>
                            <p className='text-[25px] font-bold'>FAQs</p>
                            <p className="text-[18px] color-[#000] font-medium opacity-100">
                            Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.
                            </p>
                            <div className='flex flex-wrap justify-between'>
                                <div className='flex text-[20px] pt-2 w-[65px] h-[65px] justify-center  rounded-full bg-[#D4CFC9] hover:bg-[#fff] transition-colors delay-[25ms]'>
                                    <img className='w-[50px] h-[50px] justify-center align-center' src={Mail} alt='mail'/>
                                </div>
                                <div className='flex text-[20px] pt-[9px] w-[65px] h-[65px] justify-center  rounded-full bg-[#D4CFC9] hover:bg-[#fff] transition-colors delay-[25ms]'>
                                    <img className='w-[45px] h-[45px] justify-center align-center' src={LN} alt='Linkedin'/>
                                </div>
                                <div className='flex text-[20px] pt-[9px] w-[65px] h-[65px] justify-center  rounded-full bg-[#D4CFC9] hover:bg-[#fff] transition-colors delay-[25ms]'>
                                    <img className='w-[45px] h-[45px] justify-center align-center' src={Insta} alt='Instagram'/>
                                </div>
                                <div className='flex text-[20px] pt-2 w-[65px] h-[65px] justify-center  rounded-full bg-[#D4CFC9] hover:bg-[#fff] transition-colors delay-[25ms]'>
                                    <img className='w-[50px] h-[50px] justify-center align-center' src={FB} alt='Facebook'/>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-7 relative'>
                            <p className='text-[22px] font-bold footer-main'>
                                Our Classes
                            </p>
                            <span className='top-[33px] absolute w-[60px] h-[4px] bg-[#3E5C47]'></span>
                            <p className='text-[16px] hover:text-[#D4CFC9] cursor-pointer text-[#000] font-medium hover:font-bold'>
                                Foundation
                            </p>
                            <p className='text-[16px] hover:text-[#D4CFC9] cursor-pointer text-[#000] font-medium hover:font-bold'>
                                Water
                            </p>
                            <p className='text-[16px] hover:text-[#D4CFC9] cursor-pointer text-[#000] font-medium hover:font-bold'>
                                Fire
                            </p>
                            <p className='text-[16px] hover:text-[#D4CFC9] cursor-pointer text-[#000] font-medium hover:font-bold'>
                                Air
                            </p>
                        </div>
                        <div className='flex flex-col gap-7 relative'>
                        <p className='text-[22px] font-bold footer-main'>
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