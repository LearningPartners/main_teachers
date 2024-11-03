import './App.css';
import React from 'react';
import LessonSchedule from './LessonSchedule';
import StudentManagement from './StudentManagement';
import ProfileManagement from "./ProfileManagement";

function App() {
    const [activeTab, setActiveTab] = React.useState('schedule');

    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Learning Partners</h1>
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
            {activeTab === 'schedule' && <LessonSchedule/>}
            {activeTab === 'students' && <StudentManagement/>}
            {activeTab === 'profile' && <ProfileManagement/>}
        </div>
    );
}

export default App;
