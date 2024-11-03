import React, { useState } from 'react';
import './LessonSchedule.css';

const LessonSchedule = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [lessons, setLessons] = useState([
        { date: '2024-11-05', title: 'Math with Student A' },
        { date: '2024-11-08', title: 'Science with Student B' },
        { date: '2024-11-12', title: 'English with Student C' },
    ]);

    const addLesson = (date) => {
        const newLessonTitle = prompt('Enter the lesson title:');
        if (newLessonTitle) {
            setLessons([...lessons, { date, title: newLessonTitle }]);
        }
    };

    const renderCalendar = () => {
        const daysInMonth = new Date(2024, 11, 0).getDate(); // Change the month as needed
        const daysArray = [];

        for (let i = 1; i <= daysInMonth; i++) {
            const dateStr = `2024-11-${i.toString().padStart(2, '0')}`;
            const lessonForDate = lessons.filter((lesson) => lesson.date === dateStr);

            daysArray.push(
                <div
                    key={i}
                    className={`calendar-day ${lessonForDate.length ? 'has-lesson' : ''}`}
                    onClick={() => setSelectedDate(dateStr)}
                >
                    <div className="day-number">{i}</div>
                    {lessonForDate.map((lesson, index) => (
                        <div key={index} className="lesson-title">{lesson.title}</div>
                    ))}
                </div>
            );
        }
        return daysArray;
    };

    return (
        <div className="lesson-schedule">

            <div className="view-toggle">
                <button>Monthly View</button>
                <button>Weekly View</button>
            </div>
            <div className="calendar-grid">
                {renderCalendar()}
            </div>
            <button className="add-lesson-btn" onClick={() => addLesson(selectedDate)}>
                + Add Lesson
            </button>
            <div className="lesson-list">
                <h2>Lesson List</h2>
                <ul>
                    {lessons.map((lesson, index) => (
                        <li key={index}>
                            {lesson.title} on {lesson.date}
                            <button>Edit</button>
                            <button>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LessonSchedule;
