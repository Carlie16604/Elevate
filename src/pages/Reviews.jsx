import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../index.css';
import Rock from '../assets/Reviews/Rock.png';
import Logo from '../assets/Home/Logo.png';

const Reviews = () => {

    const goTop = () => {
        window.scrollTo({
          top: 0,
        });
      };

    return (
            <>
                <div id='reviws' className='mt-40'>
                    <div className='rockContainer'>
                        <img className='reviewsRock' src={Rock} alt='Rock' />
                    </div>
                    <div className='container'>
                        <div className='flex flex-col relative '>
                            <div className='flex flex-row justify-center gap-32 relative'>
                                <div className='portals'>
                                    <Link to='/Booking' onClick={ goTop }>
                                        <div className='pButton text-[40px]'>Booking</div>
                                    </Link>
                                        <div className='pButton text-center text-[30px] px-[25px] leading-8'>Meet The Team</div>
                                    <Link to='/Contact' onClick={ goTop }>
                                        <div className='pButton text-[40px]'>Contact</div>
                                    </Link>
                                </div>
                            </div>
                            <div className='reviews'>
                                <div className='bg-[#DFDCD8] relative flex flex-col'>
                                    <div className='relative text-xl'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                                        <div className='review-Logo'>
                                            {/* <img className='' src={Logo} alt='logo'/> */}
                                            {/* Work on this next */}
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default Reviews;