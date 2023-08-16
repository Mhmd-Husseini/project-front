import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const TeacherCard = ({ id, name, description }) => {
  const link = `/teacher/CourseDetails/${id}`;

  const handleClick = () => {
    localStorage.setItem("courseid", id);
  };
  // let courseid = id;
  // let link = "courses/" + courseid;
  // localStorage.setItem("courseid", courseid)
  return (
    <Link to={link} onClick={handleClick}>
      <a href={link}>
        <div className="t-card">
          <span>{name}</span>
          <p>{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default TeacherCard;
