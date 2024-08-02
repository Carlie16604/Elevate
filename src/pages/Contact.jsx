import React from "react";
import NavBar from '../pages/NavBar';
const Contact = () => {

    return (
        <>
        <NavBar />
            <div id='Contact'>
                <div className='container pt-32'>
                    <div className='bg-[#949978] h-screen rounded-t-[4000px]'>
                        <div className='text-[70px] flex justify-center'>
                            <div className='mt-32'>
                                <h1>Contact</h1>
                            </div>
                        </div>
                        <div>
                            <h3>Hours</h3>
                            <span className='absolute w-[5.5rem] h-[4px] bg-[#D4CFC9]'></span>
                        </div>
                        <div>
                            <h3>Leave Us Your Info</h3>
                            <span className='absolute w-[5.5rem] h-[4px] bg-[#D4CFC9]'></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact