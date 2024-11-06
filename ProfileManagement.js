import React, { useState } from 'react';
import './ProfileManagement.css';

const ProfileManagement = () => {
    const [profile, setProfile] = useState({
        name: 'Teacher Name',
        email: 'teacher@example.com',
        phone: '010-1234-5678',
        bio: 'I have been teaching for 10 years...',
        subjects: [],
        educationLevel: '',
        gender: '',
        photo: null
    });
    const [isEditing, setIsEditing] = useState(false);
    const [photoPreview, setPhotoPreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setProfile(prevProfile => {
            const subjects = checked
                ? [...prevProfile.subjects, value]
                : prevProfile.subjects.filter(subject => subject !== value);
            return { ...prevProfile, subjects };
        });
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfile({ ...profile, photo: file });
            setPhotoPreview(URL.createObjectURL(file)); // Generate a preview URL for the selected image
        }
    };

    const handleSave = () => {
        setIsEditing(false);
        alert('Profile saved successfully!');
        setPhotoPreview(null); // Clear preview after saving
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

                <label>담당 과목:</label>
                {isEditing ? (
                    <div>
                        <label><input type="checkbox" value="Math" checked={profile.subjects.includes('Math')} onChange={handleCheckboxChange} /> Math</label>
                        <label><input type="checkbox" value="Science" checked={profile.subjects.includes('Science')} onChange={handleCheckboxChange} /> Science</label>
                        <label><input type="checkbox" value="English" checked={profile.subjects.includes('English')} onChange={handleCheckboxChange} /> English</label>
                        <label><input type="checkbox" value="History" checked={profile.subjects.includes('History')} onChange={handleCheckboxChange} /> History</label>
                    </div>
                ) : (
                    <p>{profile.subjects.length > 0 ? profile.subjects.join(', ') : 'No subjects selected'}</p>
                )}

                <label>학력:</label>
                {isEditing ? (
                    <select name="educationLevel" value={profile.educationLevel} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Bachelor's">Bachelor's</option>
                        <option value="Master's">Master's</option>
                        <option value="PhD">PhD</option>
                    </select>
                ) : (
                    <p>{profile.educationLevel || 'Not specified'}</p>
                )}

                <label>성별:</label>
                {isEditing ? (
                    <div>
                        <label><input type="radio" name="gender" value="Male" checked={profile.gender === 'Male'} onChange={handleChange} /> Male</label>
                        <label><input type="radio" name="gender" value="Female" checked={profile.gender === 'Female'} onChange={handleChange} /> Female</label>
                        <label><input type="radio" name="gender" value="Other" checked={profile.gender === 'Other'} onChange={handleChange} /> Other</label>
                    </div>
                ) : (
                    <p>{profile.gender || 'Not specified'}</p>
                )}

                <label>사진 등록:</label>
                {isEditing ? (
                    <div>
                        <input type="file" onChange={handlePhotoChange} />
                        {photoPreview && <img src={photoPreview} alt="Profile Preview" className="profile-photo" />}
                    </div>
                ) : profile.photo ? (
                    <img src={URL.createObjectURL(profile.photo)} alt="Profile" className="profile-photo" />
                ) : (
                    <p>No photo uploaded</p>
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
