import React from "react";
import '../index.css';
import Rock from '../assets/Reviews/Rock.png';

const Reviews = () => {
    return (
        <>
            <div id='reviws' className='mt-40'>
                <div className='container'>
                    <div className='flex flex-col relative '>
                        <div>
                            { <img className='flex mt-20 z-[-1] absolute' src={Rock} alt='Rock' />}
                        </div>
                        <div className='flex flex-row justify-center gap-32 relative'>
                            <div className='portals'>
                                <p className='text-[40px]'>Booking</p> 
                                <p className='text-center text-[37px] px-[20px] leading-8'>Meet The Team</p>
                                <p className='text-[40px]'>Contact</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reviews;