import React from "react";
import NavBar from './Components/NavBar';
import icon from '../assets/About/About.svg';
import trophy from '../assets/About/trophy.svg';
import woman1 from '../assets/About/woman1.jpg';
import women2 from '../assets/About/women2.jpg';
import woman3 from '../assets/About/woman3.jpg';

const About = () => {
    
    return (
        <>
        <NavBar />
            <div id='About'>
                <div className='container pt-28'>
                    <div className='bg-[#949978] h-full rounded-t-[4000px] z-[-1] overflow-hidden'>
                        <div className='text-[70px] text-center pt-1'>
                            <div className='mt-32'>
                                <h1 className='text-white pb-[5rem]'>The Team</h1>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 grid-rows-2 w-full min620:grid-cols-1'>
                            <div className='w-full h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]'>
                                <img className='w-20' src={icon} alt='icon'/>
                                <h2 className='text-[30px]'>About Us</h2>
                                <p className='text-[16px] font-medium text-[#F1EFF2] mt-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                            <div className='w-full h-[43rem]'>
                                <img className='w-full h-full object-cover bg-center' src={woman1} alt='woman stretching'/>
                            </div>
                            <div className='w-full h-[43rem]'>
                                <img className='w-full h-full object-cover bg-center' src={women2} alt='women stretching'/>
                            </div>
                            <div className='w-full h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]'>
                                <img className='w-20' src={trophy} alt='icon'/>
                                <h2 className='text-[30px]'>Our Instructors</h2>
                                <p className='text-[16px] font-medium text-[#F1EFF2] mt-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;