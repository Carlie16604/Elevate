import React from "react";
import '../../index.css';
import NavBar from '../Components/NavBar.jsx';
import BG from '../../assets/Universal/sideBackground.jpg'

const Challenge = () => {
return (
        <>
        <NavBar />
            <div id='Challenge'>
                <img src={BG} rel='norel' className='z-0 absolute h-[50vh] w-screen min-w-[1200px] object-cover lg:h-[40vh]' alt='none'/>
                <div className='container'>
                    <div className='text-[70px] text-center pt-1'>
                        <div className='mt-60 mb-20 md:mt-40'>
                            <h1 className='text-white relative z-10'>30 Day Challenge</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Challenge; 