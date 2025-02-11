import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const employees = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'Engineering' },
    { id: 2, name: 'Jane Smith', position: 'Product Manager', department: 'Product' },
    { id: 3, name: 'Mike Johnson', position: 'UI Designer', department: 'Design' },
    { id: 4, name: 'Sarah Williams', position: 'Data Analyst', department: 'Analytics' },
    { id: 5, name: 'Tom Brown', position: 'Marketing Specialist', department: 'Marketing' },
  ];

  return (
    <div className="dashboard">
      <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="dashboard-content">
        <Sidebar isOpen={isSidebarOpen} />
        <main className={`main-content ${!isSidebarOpen ? 'expanded' : ''}`}>
          <div className="employee-list">
            <h2>Employee List</h2>
            <div className="employee-grid">
              {employees.map(employee => (
                <div key={employee.id} className="employee-card">
                  <div className="employee-avatar">
                    {employee.name.charAt(0)}
                  </div>
                  <div className="employee-info">
                    <h3>{employee.name}</h3>
                    <p>{employee.position}</p>
                    <span className="department">{employee.department}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;