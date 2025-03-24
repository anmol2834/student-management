
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddStudent.css';

function AddStudent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const students = JSON.parse(localStorage.getItem('students') || '[]');
    const newStudent = {
      id: Date.now(),
      ...formData
    };
    const updatedStudents = [...students, newStudent];
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    navigate('/students');
  };

  return (
    <div className="add-student">
      <h1 className="add-student-title">Add New Student</h1>
      <form className="student-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter student name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter student email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            placeholder="Enter student age"
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;