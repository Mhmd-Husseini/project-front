import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../../shared/navbar';
import Children from '../Children';
import Courses from '../Courses';
import CourseReport from '../CourseReport';

const ParentMain = () => {
  return (
    <div className='body'>
        <Navbar/>
        <Routes>
            <Route index element={<Children />} />
            <Route path="childCourses/:childId" element={<Courses />} />
            <Route path="childCourses/:childId/:courseId" element={<CourseReport />} />
        </Routes>
    </div>
    );
}

export default ParentMain