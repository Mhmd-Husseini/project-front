import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = ({ one, two}) => {
  return (
    <nav className="t-navbar">
      <h1>E-Learning</h1>
      <ul className="t-nav-links">
        <li className="t-one"><Link to={"/" + one}>Classwork</Link></li>
        <li className="t-two"><Link to={"/" + two}>Enrollments</Link></li>
        <li><Link to="/">Log Out</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
