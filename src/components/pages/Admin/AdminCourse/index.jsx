import React, { useState, useEffect } from 'react';
import CoursesTable from '../../../Admin/CoursesTable';
import { useNavigate } from "react-router-dom"
import { sendRequest } from '../../../../config/request';
import ModalForm from '../../../Admin/ModalForm'


const AdminCourse = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);


  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await sendRequest({ method: 'GET', route: "/admin/courses/all", body:"", });
      setCourses(response.data);
      console.log(response)
      
    } catch (error) {
      navigate ("/");
    }
  };

  const handleDelete = async (courseId) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this user?");
      if (confirmDelete) {
        await sendRequest({ method: 'DELETE', route: `/admin/courses/deleteCourse/${courseId}` });
          fetchCourses();
      }
    } catch (error) {
      console.log(error);
    }
    console.log(courses)

  };
  
  return (
    <div>
      <CoursesTable courses={courses}  onDelete={handleDelete} fetchCourses={fetchCourses} />
    </div>
  );
};

export default AdminCourse;
