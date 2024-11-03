import React, { useState } from 'react';
import './ProfileManagement.css';

const ProfileManagement = () => {
    const [profile, setProfile] = useState({
        name: 'Teacher Name',
        email: 'teacher@example.com',
        phone: '010-1234-5678',
        bio: 'I have been teaching for 10 years...'
    });
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSave = () => {
        setIsEditing(false);
        alert('Profile saved successfully!');
    };

    return (
        <div className="profile-management">
            <h1>프로필 관리</h1>
            <div className="profile-container">
                <label>이름:</label>
                {isEditing ? (
                    <input type="text" name="name" value={profile.name} onChange={handleChange} />
                ) : (
                    <p>{profile.name}</p>
                )}

                <label>이메일:</label>
                {isEditing ? (
                    <input type="email" name="email" value={profile.email} onChange={handleChange} />
                ) : (
                    <p>{profile.email}</p>
                )}

                <label>전화번호:</label>
                {isEditing ? (
                    <input type="text" name="phone" value={profile.phone} onChange={handleChange} />
                ) : (
                    <p>{profile.phone}</p>
                )}

                <label>자기소개:</label>
                {isEditing ? (
                    <textarea name="bio" value={profile.bio} onChange={handleChange} />
                ) : (
                    <p>{profile.bio}</p>
                )}
            </div>
            <div className="profile-actions">
                {isEditing ? (
                    <button onClick={handleSave}>저장</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>수정</button>
                )}
            </div>
        </div>
    );
};

export default ProfileManagement;
