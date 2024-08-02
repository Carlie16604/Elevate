import React from "react";
import '../index.css';
import NavBar from '../pages/NavBar.jsx';
import Calendar from './Components/Calendar.jsx';
import { schedule } from '../data/schedule.js';

const Booking = () => {

    return (
        <>
        <NavBar />
            <div id='Booking'>
                <div className='container pt-32'>
                    <div className='bg-[#949978] h-[1300px] rounded-t-[4000px]'>
                        <div className='text-[70px] flex justify-center'>
                            <div className='mt-32'>
                                <h1>Schedule</h1>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <Calendar schedule={schedule} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Booking;