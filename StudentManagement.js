import React, { useState } from 'react';
import './StudentManagement.css';

const StudentManagement = () => {
    const [students, setStudents] = useState([
        { id: 1, name: 'John Doe', grade: '초등학교 1학년', status: 'Active' },
        { id: 2, name: 'Jane Smith', grade: 'Elementary 3rd Grade', status: 'Inactive' },
        { id: 3, name: 'Michael Johnson', grade: 'Middle School 2nd Grade', status: 'Active' },
    ]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [filter, setFilter] = useState({ grade: '', status: '' });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter({ ...filter, [name]: value });
    };

    const filteredStudents = students.filter(student => {
        return (
            (filter.grade ? student.grade === filter.grade : true) &&
            (filter.status ? student.status === filter.status : true)
        );
    });

    const handleStudentClick = (student) => {
        setSelectedStudent(student);
    };

    return (
        <div className="student-management">
            <h1>학생 관리</h1>
            <div className="filter-section">
                <label>Grade:
                    <select name="grade" onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="Elementary 1st Grade">초등학교 1학년</option>
                        <option value="Elementary 2nd Grade">초등학교 2학년</option>
                        <option value="Elementary 3rd Grade">초등학교 3학년</option>
                        <option value="Elementary 4th Grade">초등학교 4학년</option>
                        <option value="Elementary 5th Grade">초등학교 5학년</option>
                        <option value="Elementary 6th Grade">초등학교 6학년</option>
                        <option value="Middle School 1st Grade">중학교 1학년</option>
                        <option value="Middle School 2nd Grade">중학교 2학년</option>
                        <option value="Middle School 3rd Grade">중학교 3학년</option>
                    </select>
                </label>
                <label>Status:
                    <select name="status" onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </label>
            </div>
            <div className="student-list">
                {filteredStudents.map(student => (
                    <div key={student.id} className="student-card" onClick={() => handleStudentClick(student)}>
                        <h3>{student.name}</h3>
                        <p>{student.grade}</p>
                        <p>Status: {student.status}</p>
                    </div>
                ))}
            </div>
            {selectedStudent && (
                <div className="student-details">
                    <h2>{selectedStudent.name}</h2>
                    <p>Grade: {selectedStudent.grade}</p>
                    <p>Status: {selectedStudent.status}</p>
                    <p>Other details and records can be shown here...</p>
                </div>
            )}
        </div>
    );
};

export default StudentManagement;
