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
                                <h1 className='text-white'>Schedule</h1>
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
                                        <h2 className='text-center text-[#2f4636] text-[30px] mb-6'>
                                            Classes Available on {selectedDateInfo.date.charAt(0).toUpperCase() + selectedDateInfo.date.slice(1)}
                                        </h2>
                                    <div className='mt-5'>
                                        <div className='flex flex-col gap-3'>
                                            {selectedDateInfo.classes.length > 0 ? (
                                                <ul className='flex flex-col gap-4 items-center'>
                                                    {selectedDateInfo.classes.map((cls) => (
                                                        <div key={cls.id} className='flex justify-between py-[15px] px-[55px] bg-[#D4CFC9] w-full max-w-[800px] rounded-[40px]'>
                                                            <li className=''>
                                                                <p className='text-[#543019] opacity-[.4] text-[15px] min-w-[140px]'>Class Type:</p>
                                                                <p className='text-[25px] font-medium'>{cls.type}</p>
                                                            </li>
                                                            <li>
                                                                <p className='text-[#543019] opacity-[.4] text-[15px] text-center min-w-[205.98px]'>Time</p>
                                                                <p className='text-[25px] font-medium'>{cls.time}</p>
                                                            </li>
                                                            <li className='text-center'>
                                                                <p className='text-[#543019] opacity-[.4] text-[15px] min-w-[148px]'>Instructor</p>
                                                                <p className='text-[25px] font-medium'>{cls.instructor}</p>
                                                            </li>
                                                        </div>
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
                        <div className='flex justify-center py-6'>
                            <Calendar schedule={schedule} />
                            {/* Connect these */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Booking;