import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../index.css';
import Rock from '../assets/Reviews/Rock.png';
import Logo from '../assets/Home/Logo.png';
import FB from '../assets/Reviews/Facebook.png';
import Insta from '../assets/Reviews/Instagram.png';
import LN from '../assets/Reviews/Linkedin.png';
import Mail from '../assets/Reviews/Mail.png';

const Reviews = () => {
    return (
        // <Router>
            <>
                <div id='reviws' className='mt-40'>
                    <div className='rockContainer'>
                        <img className='reviewsRock' src={Rock} alt='Rock' />
                    </div>
                    <div className='container'>
                        <div className='flex flex-col relative '>
                            <div className='flex flex-row justify-center gap-32 relative'>
                                <div className='portals'>
                                    <Link to='/Booking'>
                                        <div className='pButton text-[40px]'>Booking</div>
                                    </Link>
                                    <div className='pButton text-center text-[30px] px-[25px] leading-8'>Meet The Team</div>
                                    <div className='pButton text-[40px]'>Contact</div>
                                </div>
                            </div>
                            <div className='reviews'>
                                <div className='bg-[#DFDCD8] relative flex flex-col'>
                                    <p className='relative text-xl'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                                        <div className='review-Logo'>
                                            {/* <img className='' src={Logo} alt='logo'/> */}
                                        </div> 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#949978] h-60 content-center w-screen text-[20px] opacity-75'>
                        <div className='container'>
                            <div className=' flex justify-between flex-col px-8 opacity-100'>
                                <p>Studio Policies</p>
                                <p>FAQ</p>
                                <div className='flex justify-end'>
                                    <div className='w-8 h-8 flex flex-row gap-5 mr-[188.5px]'>
                                        <img className='social-icon' src={Mail} alt='Mail Icon'/>
                                        <img className='social-icon' src={LN} alt='Linkedin Icon'/>
                                        <img className='social-icon' src={Insta} alt='Instagram Icon'/>
                                        <img className='social-icon' src={FB} alt='Facebook Icon'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Routes>
                    <Route path='/Booking' element={<Booking />}/>
                </Routes> */}
            </>
        /* </Router> */
    )
}

export default Reviews;