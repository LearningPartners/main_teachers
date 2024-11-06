import './App.css';
import React, { useState } from 'react';
import LessonSchedule from './LessonSchedule';
import StudentManagement from './StudentManagement';
import ProfileManagement from "./ProfileManagement";

function App() {
    const [activeTab, setActiveTab] = useState('schedule');
    const [showNotifications, setShowNotifications] = useState(false);

    const notifications = [
        '***학생이 OO과목 과외 요청을 보냈습니다.',
        '***학생이 OO과목 과외 요청을 보냈습니다.',
        '***학생이 OO과목 과외 요청을 보냈습니다.',
    ];

    return (
        <div>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
                <h1 style={{ margin: '0', textAlign: 'center' }}>Learning Partners</h1>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="notification-button" onClick={() => setShowNotifications(true)}>🔔 알림</button>
                    <button className="logout-button">로그아웃</button>
                </div>
            </header>
            <div className="tab-menu">
                <button
                    className={`tab ${activeTab === 'schedule' ? 'active' : ''}`}
                    onClick={() => setActiveTab('schedule')}
                >
                    수업 일정 관리
                </button>
                <button
                    className={`tab ${activeTab === 'students' ? 'active' : ''}`}
                    onClick={() => setActiveTab('students')}
                >
                    학생 관리
                </button>
                <button
                    className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
                    onClick={() => setActiveTab('profile')}
                >
                    프로필 관리
                </button>
            </div>
            {activeTab === 'schedule' && <LessonSchedule />}
            {activeTab === 'students' && <StudentManagement />}
            {activeTab === 'profile' && <ProfileManagement />}

            {showNotifications && (
                <div className="modal-overlay" onClick={() => setShowNotifications(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h2>알림</h2>
                        <div className="notifications">
                            {notifications.map((notification, index) => (
                                <div key={index} className="notification-item">
                                    {notification}
                                </div>
                            ))}
                        </div>
                        <button className="close-button" onClick={() => setShowNotifications(false)}>닫기</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
