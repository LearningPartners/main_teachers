import React, { useState } from 'react';
import './WeeklyView.css';

const WeeklyView = () => {
    const [lessons, setLessons] = useState([
        { id: 1, day: '월', subject: '테크노 경영학', location: '공학관 101', time: '10:00 - 11:30' },
        { id: 2, day: '화', subject: '소프트웨어공학', location: '국제교육관 443', time: '12:00 - 13:30' },
        { id: 3, day: '수', subject: '네트워크', location: '국제교육관 442', time: '14:00 - 15:30' },
        { id: 4, day: '목', subject: '데이터베이스 프로그래밍', location: '국제교육관 553', time: '09:00 - 10:30' },
        { id: 5, day: '금', subject: '클라우드컴퓨팅이해', location: '국제교육관 533', time: '11:00 - 12:30' },
    ]);

    return (
        <div className="weekly-view">
            <h2>주간 수업 일정</h2>
            <div className="calendar-grid">
                {['월', '화', '수', '목', '금'].map((day, index) => (
                    <div key={index} className="day-column">
                        <div className="day-header">{day}</div>
                        {lessons.filter(lesson => lesson.day === day).map(lesson => (
                            <div key={lesson.id} className="lesson-card">
                                <p className="lesson-subject">{lesson.subject}</p>
                                <p className="lesson-location">{lesson.location}</p>
                                <p className="lesson-time">{lesson.time}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeeklyView;
