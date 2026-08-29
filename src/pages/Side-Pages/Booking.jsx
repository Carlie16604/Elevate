import React, { useState, useEffect } from "react";
import '../../index.css';
import NavBar from '../Components/NavBar.jsx';
import Calendar from '../Components/Calendar.jsx';
import Popup from '../Components/Popup.jsx';
import { schedule } from '../../data/schedule.js';
import BG from '../../assets/Universal/sideBackground.jpg'

const emptyBookingForm = {
    name: '',
    email: ''
};

const Booking = () => {
    const [selectedDateInfo, setSelectedDateInfo] = useState({ date: null, classes: null });
    const [selectedClass, setSelectedClass] = useState(null);
    const [formData, setFormData] = useState(emptyBookingForm);
    const [isBooked, setIsBooked] = useState(false);

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

    const openBookingPopup = (cls) => {
        setSelectedClass(cls);
        setFormData(emptyBookingForm);
        setIsBooked(false);
    };

    const closeBookingPopup = () => {
        setSelectedClass(null);
        setFormData(emptyBookingForm);
        setIsBooked(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const handleBookingSubmit = (event) => {
        event.preventDefault();
        setIsBooked(true);
        setFormData(emptyBookingForm);
    };

    return (
        <>
        <NavBar />
            <div id='Booking'>
                <img src={BG} rel='norel' className='z-10 absolute h-[40vh] w-full object-cover desktop:h-[50vh]' alt='none'/>
                <div className='container'>
                    <div className='text-[42px] desktop:text-[70px] text-center pt-1'>
                        <div className='mt-32 mb-10 desktop:mt-60 desktop:mb-20 md:mt-40'>
                            <h1 className='z-10 text-white relative backdrop-blur-sm'>Booking</h1>
                        </div>
                    </div>
                    <div className='bg-[#97ab8623] backdrop-blur-sm shadow-xl py-0 pt-[.15rem]'>
                        <div className='flex flex-wrap gap-3 justify-center mt-16 desktop:mt-48 pb-4 px-3'>
                            {schedule.map((daySchedule) => (
                                <button
                                    key={daySchedule.id}
                                    onClick={() => handleDateSelect(daySchedule.day, daySchedule.classes)}
                                    className={`py-3 px-5 w-fit self-center text-[14px] tracking-[1px] cursor-pointer border-2 rounded-[400px] transition-[box-shadow] ease-out duration-1000 ${
                                        selectedDateInfo.date === daySchedule.day
                                            ? 'text-black bg-[#ff8e43] border-[#ff8e43] shadow-[inset_0_0_0_0_#ff8e43] hover:shadow-[inset_400px_0_0_0_#ff8e43] hover:text-white'
                                            : 'text-black bg-[#e0ddd9] border-[#fff] shadow-[inset_0_0_0_0_#DFDCD8] hover:shadow-[inset_400px_0_0_0_#D4CFC9] hover:text-white'
                                    }`}
                                >
                                    {daySchedule.day.charAt(0).toUpperCase() + daySchedule.day.slice(1)}
                                </button>
                            ))}
                        </div>
                        <div className='mt-5'>
                            {selectedDateInfo.date ? (
                                <>
                                    <div className='mt-5'>
                                        <div className='flex flex-col gap-3'>
                                            {selectedDateInfo.classes.length > 0 ? (
                                                <>
                                                <p className='text-[16px] font-medium text-[#2f4636] text-center'>Select a class to book</p>
                                                <ul className='flex flex-col gap-4 items-center'>
                                                    {selectedDateInfo.classes.map((cls) => (
                                                        <div
                                                            key={cls.id}
                                                            className='booking-class-card flex flex-col md:flex-row justify-between py-4 px-6 desktop:py-[15px] desktop:px-[55px] bg-[#e0ddd9] border-[2.3px] border-[#b2b799] w-[calc(100%-1.5rem)] max-w-[800px] rounded-[40px]'
                                                            onClick={() => openBookingPopup(cls)}
                                                            role='button'
                                                            tabIndex={0}
                                                            onKeyDown={(event) => {
                                                                if (event.key === 'Enter' || event.key === ' ') {
                                                                    event.preventDefault();
                                                                    openBookingPopup(cls);
                                                                }
                                                            }}
                                                        >
                                                            <li className=''>
                                                                <p className='text-[#ff8e43] text-[15px] md:min-w-[140px]'>Class Type:</p>
                                                                <p className='text-[20px] desktop:text-[25px] font-medium'>{cls.type}</p>
                                                            </li>
                                                            <li>
                                                                <p className='text-[#ff8e43] text-[15px] text-center md:min-w-[205.98px]'>Time</p>
                                                                <p className='text-[20px] desktop:text-[25px] font-medium'>{cls.time}</p>
                                                            </li>
                                                            <li className='text-center'>
                                                                <p className='text-[#ff8e43] text-[15px] md:min-w-[148px]'>Instructor</p>
                                                                <p className='text-[20px] desktop:text-[25px] font-medium'>{cls.instructor}</p>
                                                            </li>
                                                        </div>
                                                    ))}
                                                </ul>
                                                </>
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
                        <div className='flex justify-center py-8 desktop:py-12 px-3'>
                            <Calendar schedule={schedule} />
                        </div>
                        </div>
                    </div>
                </div>
            <Popup isOpen={Boolean(selectedClass)} onClose={closeBookingPopup}>
                {isBooked ? (
                    <div className='text-center'>
                        <h3 className='text-[#ff8e43] text-[32px] font-bold mb-3'>{"You're booked!"}</h3>
                        <p className='text-[16px] font-medium mb-8'>See you there.</p>
                        <button
                            type='button'
                            onClick={closeBookingPopup}
                            className='py-3 px-8 text-black bg-transparent border-2 rounded-[400px] border-[#ff8e43] text-[14px] tracking-[1px] cursor-pointer shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#ff8e43] hover:text-white'
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <form className='flex flex-col' onSubmit={handleBookingSubmit}>
                        <h3 className='text-[#000000] text-[28px] mb-2 text-center'>Book this class</h3>
                        <span className='bg-[#ff8b40] w-[50px] h-[4px] mx-auto mb-6'/>
                        {selectedClass && (
                            <p className='text-center text-[16px] font-medium mb-6'>
                                {selectedClass.type} · {selectedClass.time}
                            </p>
                        )}
                        <input
                            className='w-full py-[12px] px-[20px] h-[51px] text-[14px] bg-[#e0ddd9] outline-none mb-5 rounded-xl border-[2.3px] border-[#97ab86]'
                            placeholder='Full Name'
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className='w-full py-[12px] px-[20px] h-[51px] text-[14px] bg-[#e0ddd9] outline-none mb-8 rounded-xl border-[2.3px] border-[#97ab86]'
                            placeholder='Email Address'
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type='submit'
                            className='py-3 px-8 w-fit self-center text-black bg-transparent border-2 rounded-[400px] border-[#ff8e43] text-[14px] tracking-[1px] cursor-pointer shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#ff8e43] hover:text-white'
                        >
                            Submit
                        </button>
                    </form>
                )}
            </Popup>
        </>
    );
};

export default Booking;
