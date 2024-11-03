import React, { useState } from 'react';
import './StudentManagement.css';

const StudentManagement = () => {
    const [students, setStudents] = useState([
        { id: 1, name: 'John Doe', grade: 'Grade 10', status: 'Active' },
        { id: 2, name: 'Jane Smith', grade: 'Grade 11', status: 'Inactive' },
        { id: 3, name: 'Michael Johnson', grade: 'Grade 12', status: 'Active' },
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
                        <option value="Grade 10">Grade 10</option>
                        <option value="Grade 11">Grade 11</option>
                        <option value="Grade 12">Grade 12</option>
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
