import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-content">
        <Link to="/dashboard" className="sidebar-link active">
          <span className="material-icons">dashboard</span>
          Dashboard
        </Link>
        <Link to="/dashboard/employees" className="sidebar-link">
          <span className="material-icons">people</span>
          Employees
        </Link>
        <Link to="/dashboard/departments" className="sidebar-link">
          <span className="material-icons">business</span>
          Departments
        </Link>
        <Link to="/dashboard/settings" className="sidebar-link">
          <span className="material-icons">settings</span>
          Settings
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;