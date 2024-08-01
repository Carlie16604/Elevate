import React from "react";
// import FB from '../../assets/Reviews/Facebook.png;';
// import Insta from '../../assets/Reviews/Instagram.png';
// import LN from '../../assets/Reviews/Linkedin.png';
// import Mail from '../../assets/Reviews/Mail.png';

const Footer = () => {
    return (
        <>
            <div className='bg-[#949978] h-60 content-center w-screen text-[20px] opacity-75'>
                <div className='container py-[10rem]'>
                    <div className=' flex justify-between flex-col px-8 opacity-100'>
                        <p>Studio Policies</p>
                        <p>FAQ</p>
                        <div className='flex justify-end'>
                            <div className='w-8 h-8 flex flex-row gap-5 mr-[188.5px]'>
                                {/* <img className='social-icon' src={Mail} alt='Mail Icon'/>
                                <img className='social-icon' src={LN} alt='Linkedin Icon'/>
                                <img className='social-icon' src={Insta} alt='Instagram Icon'/>
                                <img className='social-icon' src={FB} alt='Facebook Icon'/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer