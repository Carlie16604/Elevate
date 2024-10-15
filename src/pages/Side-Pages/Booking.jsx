import React, { useState, useEffect, props } from "react";
import '../../index.css';
import NavBar from '../Components/NavBar.jsx';
import Calendar from '../Components/Calendar.jsx';
import { schedule } from '../../data/schedule.js';
import BG from '../../assets/Universal/example.jpg'

const Booking = () => {
    const [selectedDateInfo, setSelectedDateInfo] = useState({ date: null, classes: null });

    const getCurrentDay = () => {
        const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const today = new Date();
        return daysOfWeek[today.getDay()];
    };

    useEffect(() => {
        const currentDay = getCurrentDay();
        const currentDaySchedule = schedule.find(daySchedule => daySchedule.day === currentDay);

        if (currentDaySchedule) {
            setSelectedDateInfo({ date: currentDaySchedule.day, classes: currentDaySchedule.classes });
        }
    }, []);

    const handleDateSelect = (date, classes) => {
        setSelectedDateInfo({ date, classes });
    };

    return (
        <>
        <NavBar />
            <div id='Booking'>
                <img src={BG} rel='norel' className='z-0 absolute h-[50vh] w-screen min-w-[1200px] object-cover lg:h-[40vh]' alt='none'/>
                <div className='container'>
                    <div className='text-[70px] text-center pt-1'>
                        <div className='mt-60 mb-20 md:mt-40'>
                            <h1 className='text-white relative z-10'>Booking</h1>
                        </div>
                    </div>
                        <div className='flex flex-wrap gap-4 justify-center mt-48'>
                            {schedule.map((daySchedule) => (
                                <button
                                    key={daySchedule.id}
                                    onClick={() => handleDateSelect(daySchedule.day, daySchedule.classes)}
                                    className={`py-3 px-5 w-fit self-center text-[14px] tracking-[1px] cursor-pointer border-2 rounded-[400px] transition-[box-shadow] ease-out duration-1000 ${
                                        selectedDateInfo.date === daySchedule.day
                                            ? 'text-black bg-[#ff8e43] border-[#ff8e43] shadow-[inset_0_0_0_0_#ff8e43] hover:shadow-[inset_400px_0_0_0_#ff8e43] hover:text-white'
                                            : 'text-black bg-[#D4CFC9] border-[#fff] shadow-[inset_0_0_0_0_#DFDCD8] hover:shadow-[inset_400px_0_0_0_#D4CFC9] hover:text-white'
                                    }`}
                                >
                                    {daySchedule.day.charAt(0).toUpperCase() + daySchedule.day.slice(1)}
                                </button>
                            ))}
                        </div>
                        <div className='mt-5'>
                            {selectedDateInfo.date ? (
                                <>
                                        <h2 className='text-center text-black text-[30px] mb-6'>
                                            Classes Available on <span className='text-[#ff8e43]'>{selectedDateInfo.date.charAt(0).toUpperCase() + selectedDateInfo.date.slice(1)}</span>
                                        </h2>
                                    <div className='mt-5'>
                                        <div className='flex flex-col gap-3'>
                                            {selectedDateInfo.classes.length > 0 ? (
                                                <ul className='flex flex-col gap-4 items-center'>
                                                    {selectedDateInfo.classes.map((cls) => (
                                                        <div key={cls.id} className='flex justify-between py-[15px] px-[55px] bg-[#D4CFC9] border-[2.3px] border-[#b2b799] w-full max-w-[800px] rounded-[40px]'>
                                                            <li className=''>
                                                                <p className='text-[#949978] text-[15px] min-w-[140px]'>Class Type:</p>
                                                                <p className='text-[25px] font-medium'>{cls.type}</p>
                                                            </li>
                                                            <li>
                                                                <p className='text-[#949978] text-[15px] text-center min-w-[205.98px]'>Time</p>
                                                                <p className='text-[25px] font-medium'>{cls.time}</p>
                                                            </li>
                                                            <li className='text-center'>
                                                                <p className='text-[#949978] text-[15px] min-w-[148px]'>Instructor</p>
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
                        <div className='flex justify-center py-12'>
                            <Calendar schedule={schedule} />
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    );
};

export default Booking;