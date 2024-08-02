import React, { useState, useEffect } from "react";
import '../../index.css';

const Calendar = () => {
    // Initialize state
    const [date, setDate] = useState(new Date());
    const [year, setYear] = useState(date.getFullYear());
    const [month, setMonth] = useState(date.getMonth());

    // Array of month names
    const months = [
        "January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October",
        "November", "December"
    ];

    // Function to generate the calendar
    const manipulate = () => {
        let dayone = new Date(year, month, 1).getDay();
        let lastdate = new Date(year, month + 1, 0).getDate();
        let dayend = new Date(year, month, lastdate).getDay();
        let monthlastdate = new Date(year, month, 0).getDate();

        let lit = [];

        // Add the last dates of the previous month
        for (let i = dayone; i > 0; i--) {
            lit.push(<li key={`prev-${i}`} className="inactive">{monthlastdate - i + 1}</li>);
        }

        // Add the dates of the current month
        for (let i = 1; i <= lastdate; i++) {
            let isToday = i === date.getDate() &&
                month === new Date().getMonth() &&
                year === new Date().getFullYear() ? "active" : "";
            lit.push(<li key={`curr-${i}`} className={isToday}>{i}</li>);
        }

        // Add the first dates of the next month
        for (let i = dayend; i < 6; i++) {
            lit.push(<li key={`next-${i}`} className="inactive">{i - dayend + 1}</li>);
        }

        return lit;
    };

    // Event handler for navigation
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
                    <li>Sun</li>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                </ul>
                <ul className="calendar-dates">
                    {manipulate()}
                </ul>
            </div>
        </div>
    );
}

export default Calendar;