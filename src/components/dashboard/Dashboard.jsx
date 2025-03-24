
import React from 'react';
import './Dashboard.css';

function Dashboard() {
  const students = JSON.parse(localStorage.getItem('students') || '[]');
  
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Students</h3>
          <p className="stat-number">{students.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;