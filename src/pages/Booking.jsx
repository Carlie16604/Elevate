import React, { useState } from "react";
import '../index.css';
import NavBar from '../pages/NavBar.jsx';
import Calendar from './Components/Calendar.jsx';
import { schedule } from '../data/schedule.js';

const Booking = () => {
    const [selectedDateInfo, setSelectedDateInfo] = useState({ date: null, classes: null });
    
    const handleDateSelect = (date, classes) => {
        setSelectedDateInfo({ date, classes });
    };

    return (
        <>
        <NavBar />
            <div id='Booking'>
                <div className='container pt-28'>
                    <div className='bg-[#949978] h-[1300px] rounded-t-[4000px]'>
                        <div className='text-[70px] flex justify-center'>
                            <div className='mt-32'>
                                <h1>Schedule</h1>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <Calendar schedule={schedule} onDateSelect={handleDateSelect} />
                        </div>
                        {selectedDateInfo.date && (
                            <div className='schedule-details'>
                                <h2>Schedule for {selectedDateInfo.date}</h2>
                                <ul>
                                {selectedDateInfo.classes ? (
                                    selectedDateInfo.classes.map((cls) => (
                                    <li key={cls.id} className='bottom-0 bg-[#fff]'>
                                        <div>Type:</div> {cls.type} <br />
                                        <div>Time:</div> {cls.time} <br />
                                        <div>Instructor:</div> {cls.instructor}
                                    </li>
                                    ))
                                ) : (
                                    <p>No classes scheduled for this day.</p>
                                )}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Booking