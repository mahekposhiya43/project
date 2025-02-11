import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar({ onMenuClick }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-button" onClick={onMenuClick}>
          <span className="material-icons">menu</span>
        </button>
        <h1>Admin Dashboard</h1>
      </div>
      <div className="navbar-right">
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;