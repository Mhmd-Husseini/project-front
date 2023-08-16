import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.css';

const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h2 className="sidebarTitle">Dashboard</h2>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <NavLink to="/admin/"  className="link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <NavLink to="/admin/admin" className="link" activeClassName="active">
                Admins
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <NavLink to="/admin/teacher" className="link" activeClassName="active">
                Teachers
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <NavLink to="/admin/student" className="link" activeClassName="active">
                Students
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <NavLink to="/admin/parent" className="link" activeClassName="active">
                Parents
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <NavLink to="/admin/course" className="link" activeClassName="active">
                Courses
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
