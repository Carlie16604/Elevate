import React, { useState } from "react";
import '../../index.css';
// import AR from '../assets/Calendar/Arrow right.png';
// import AL from '../assets/Calendar/Arrow Left.png';

const Calendar = ({ schedule, onDateSelect }) => {
    const [date, setDate] = useState(new Date());
    const [year, setYear] = useState(date.getFullYear());
    const [month, setMonth] = useState(date.getMonth());
    const [selectedDay, setSelectedDay] = useState(null);

    const months = [
        "January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October",
        "November", "December"
    ];

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const manipulate = () => {
        let dayone = new Date(year, month, 1).getDay();
        let lastdate = new Date(year, month + 1, 0).getDate();
        let dayend = new Date(year, month, lastdate).getDay();
        let monthlastdate = new Date(year, month, 0).getDate();

        let lit = [];

        for (let i = dayone; i > 0; i--) {
            lit.push(
                <li key={`prev-${i}`} className="inactive">
                    {monthlastdate - i + 1}
                </li>
            );
        }

        for (let i = 1; i <= lastdate; i++) {
            let isToday = i === date.getDate() &&
                month === new Date().getMonth() &&
                year === new Date().getFullYear() ? "active" : "";
            lit.push(
                <li
                    key={`curr-${i}`}
                    className={isToday}
                    onClick={() => handleDateClick(i)}
                >
                    {i}
                </li>
            );
        }

        for (let i = dayend; i < 6; i++) {
            lit.push(
                <li key={`next-${i}`} className="inactive">
                    {i - dayend + 1}
                </li>
            );
        }

        return lit;
    };

    const handleNavigation = (direction) => {
        let newMonth = month + direction;
        let newYear = year;

        if (newMonth < 0) {
            newMonth = 11;
            newYear--;
        } else if (newMonth > 11) {
            newMonth = 0;
            newYear++;
        }

        setYear(newYear);
        setMonth(newMonth);
        setDate(new Date(newYear, newMonth, date.getDate()));
        setSelectedDay(null);
    };

    const handleDateClick = (day) => {
        setSelectedDay(day);
        const dayName = daysOfWeek[new Date(year, month, day).getDay()].toLowerCase();
        const scheduleForDay = schedule.find(item => item.day === dayName);

        const dateStr = `${months[month]} ${day}, ${year}`;
        onDateSelect(dateStr, scheduleForDay ? scheduleForDay.classes : null);
    };

    return (
        <div className="calendar-container">
            <header className="calendar-header">
                <p className="calendar-current-date">{`${months[month]} ${year}`}</p>     
                <div className="calendar-navigation">
                    <div className='button-space hover:opacity-75'>
                        <span id="calendar-prev"
                            onClick={() => handleNavigation(-1)}>
                            {/* <img src={AL} alt='arrow left' className='w-[20px] h-[20px]'/> */}
                            <p className='text-white -rotate-180'>➜</p>
                        </span>
                    </div>
                    <div className='button-space hover:opacity-75'>
                        <span id="calendar-next"
                            onClick={() => handleNavigation(1)}>
                                <p className='text-white'>➜</p>
                            {/* <img src={AR} alt='arrow right' className='w-[20px] h-[20px]'/> */}
                        </span>
                    </div>
                </div>
            </header>

            <div className="calendar-body">
                <ul className="calendar-weekdays">
                    {daysOfWeek.map(day => (
                        <li key={day}>{day}</li>
                    ))}
                </ul>
                <ul className="calendar-dates">
                    {manipulate()}
                </ul>
            </div>  
        </div>
    );
};

export default Calendar;