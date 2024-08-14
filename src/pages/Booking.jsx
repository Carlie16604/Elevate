import React, { useState } from "react";
import '../index.css';
import NavBar from './Components/NavBar.jsx';
import Calendar from './Calendar.jsx';
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
                    <div className='bg-[#949978] h-fit rounded-t-[4000px]'>
                        <div className='text-[70px] flex justify-center'>
                            <div className='mt-32'>
                                <h1>Schedule</h1>
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-4 justify-center mt-8'>
                            {schedule.map((daySchedule) => (
                                <a
                                    key={daySchedule.id}
                                    onClick={() => handleDateSelect(daySchedule.day, daySchedule.classes)}
                                    className='py-3 px-5 w-fit self-center text-black bg-[#D4CFC9] border-2 rounded-[400px] border-[#fff] inline-block text-[14px] tracking-[1px] cursor-pointer shadow-[inset_0_0_0_0_#DFDCD8] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#D4CFC9] hover:text-white'
                                >
                                    {daySchedule.day.charAt(0).toUpperCase() + daySchedule.day.slice(1)}
                                </a>
                            ))}
                        </div>
                        <div className='my-5'>
                            {selectedDateInfo.date ? (
                                <>
                                        <h2 className='text-center text-white text-[30px] mb-6'>
                                            Schedule for {selectedDateInfo.date.charAt(0).toUpperCase() + selectedDateInfo.date.slice(1)}
                                        </h2>
                                    <div className='mt-5'>
                                        <div className='flex flex-col gap-3'>
                                            {selectedDateInfo.classes.length > 0 ? (
                                                <ul className='flex flex-col gap-4 items-center'>
                                                    {selectedDateInfo.classes.map((cls) => (
                                                        <li key={cls.id} className='py-[25px] px-[55px] bg-[#f2f2f2] w-full max-w-[800px] rounded-[15px] text-center'>
                                                            <p className='text-[18px] font-bold text-[#333] mb-2'>{cls.type}</p>
                                                            <p className='text-[16px] font-medium text-[#666]'>Time: {cls.time}</p>
                                                            <p className='text-[16px] font-medium text-[#666]'>Instructor: {cls.instructor}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className='text-center text-white text-[20px]'>No classes scheduled for this day.</p>
                                            )}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <p className='text-center text-white text-[20px] mt-6'>Please select a day to view the schedule.</p>
                            )}
                        </div>
                        <div className='flex justify-center py-12'>
                            <Calendar schedule={schedule} />
                            {/* Come back to Calendar */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Booking;