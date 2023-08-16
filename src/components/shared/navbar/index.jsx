import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = ({ one, two, user}) => {

  const logout = () => localStorage.clear

  return (
    <nav className="navbar">
      <h1>E-Learning</h1>
      <ul className="nav-links">
        <li><NavLink to={"/Student"}>{one}</NavLink></li>
        <li><NavLink to={"/"+ user + "/" + two}>{two}</NavLink></li>
        <li><NavLink to="/" onClick={logout}>Log Out</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
