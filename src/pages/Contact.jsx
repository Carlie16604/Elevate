import React from "react";
import '../index.css';
import GreenBackground from '../assets/Contact/Background.png'
import FB from '../assets/Reviews/Facebook.png';
import Insta from '../assets/Reviews/Instagram.png';
import LN from '../assets/Reviews/Linkedin.png';
import Mail from '../assets/Reviews/Mail.png';

const Contact = () => {

    return (
        <>
            <div id='contact'>
                <div className='mt-32'>
                    <div className='container bg-[#949978] h-[1300px] rounded-t-[4000px]'>
                        <div className='text-[70px] flex justify-center'>
                            <div className='mt-32'>
                                <h1>Schedule</h1>
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
        </>
    )
}

export default Contact;