import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../../shared/navbar';
import StudentClasses from '../StudentClasses';
import StudentClasswork from '../StudentClasswork';
import StudentSubmission from '../StudentSubmission';
import StudentChat from '../StudentChat'
import StudentEnrollments from '../StudentEnrollments';

const StudentLayout = () => {
    return (
        <>
            <Navbar one={'Courses'} two={'Enrollments'} user={'Student'} />
            <div>
                <Routes>
                    <Route index element={<StudentClasses />} />
                    <Route path='Enrollments' element={<StudentEnrollments/>}/>
                    <Route path="Classwork/:course_id" element={<StudentClasswork />} />
                    <Route path="Submission/:course_id/:type/:item_id" element={<StudentSubmission />} />
                    <Route path="Chat/:course_id" element={<StudentChat />} />
                </Routes>
            </div>
        </>
    );
};

export default StudentLayout;
