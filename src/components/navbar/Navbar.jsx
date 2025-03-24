
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">StudentSync</h2>
        <div className="nav-links">
          <Link to="/" className="nav-link">Dashboard</Link>
          <Link to="/students" className="nav-link">Students</Link>
          <Link to="/add-student" className="nav-link">Add Student</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;