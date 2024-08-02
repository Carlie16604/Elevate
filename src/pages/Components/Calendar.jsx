import React, { useState } from "react";
import '../../index.css';

const Calendar = ({ schedule }) => {
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
                <li key={`curr-${i}`} className={isToday}>
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

    const getClassesForSelectedDay = () => {
    if (selectedDay === null) return null;

        const dayName = daysOfWeek[new Date(year, month, selectedDay).getDay()].toLowerCase();
        const scheduleForDay = schedule.find(item => item.day === dayName);

        return scheduleForDay ? scheduleForDay.classes : null;
    };

    return (
        <div className="calendar-container">
            <header className="calendar-header">
                <p className="calendar-current-date">{`${months[month]} ${year}`}</p>
                <div className="calendar-navigation">
                    <span id="calendar-prev"
                        className="material-symbols-rounded"
                        onClick={() => handleNavigation(-1)}>
                        ←
                    </span>
                    <span id="calendar-next"
                        className="material-symbols-rounded"
                        onClick={() => handleNavigation(1)}>
                        →
                    </span>
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

            {selectedDay && (
                <div className="schedule-details">
                    <h2>Schedule for {`${months[month]} ${selectedDay}, ${year}`}</h2>
                    <ul>
                        {getClassesForSelectedDay() ? (
                        getClassesForSelectedDay().map((cls) => (
                            <li key={cls.id}>
                            <strong>Type:</strong> {cls.type} <br />
                            <strong>Time:</strong> {cls.time} <br />
                            <strong>Instructor:</strong> {cls.instructor}
                            </li>
                        ))
                    ) : (
                        <p>No classes scheduled for this day.</p>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Calendar;