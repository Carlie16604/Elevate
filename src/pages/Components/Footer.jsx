import React from "react";
import FB from '../../assets/Reviews/Facebook.png'
import Insta from '../../assets/Reviews/Instagram.png';
import LN from '../../assets/Reviews/Linkedin.png';
import Mail from '../../assets/Reviews/Mail.png';

const Footer = () => {
    return (
        <>
            <div className='bg-[#949978] opacity-[75%] z-[-1] py-[3rem]'>
                <div className='container px-8 w-screen'>
                    <div classNAme='flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem]'>
                        <div className='flex flex-col w-1/3 gap-8'>
                            {/* Logo here */}
                            <p className="text-[20px] color-[#000] font-medium opacity-100">
                            Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.
                            </p>
                            <div className='flex flex-wrap'>
                                <div className='flex text-[20px] pt-2 w-[65px] h-[65px] justify-center  rounded-full bg-[#D4CFC9]'>
                                    <img className='w-[50px] h-[50px] justify-center align-center' src={Mail} alt='mail'/>
                                </div>
                                <div className='flex text-[20px] pt-[9px] w-[65px] h-[65px] justify-center  rounded-full bg-[#D4CFC9]'>
                                    <img className='w-[45px] h-[45px] justify-center align-center' src={LN} alt='Linkedin'/>
                                </div>
                                <div className='flex text-[20px] pt-[9px] w-[65px] h-[65px] justify-center  rounded-full bg-[#D4CFC9]'>
                                    <img className='w-[45px] h-[45px] justify-center align-center' src={Insta} alt='Instagram'/>
                                </div>
                                <div className='flex text-[20px] pt-2 w-[65px] h-[65px] justify-center  rounded-full bg-[#D4CFC9]'>
                                    <img className='w-[50px] h-[50px] justify-center align-center' src={FB} alt='Facebook'/>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </>
    )
}

export default Footer