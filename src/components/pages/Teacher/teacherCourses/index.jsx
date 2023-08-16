import '../teacherCourses/style.css'
import Navbar from '../../../shared/teacherNav/index'
import CardsContainer from '../../../shared/CardsContainer/index';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const TeacherCourses = () => {

  let [courses , setCourses] = useState([]);
  const token = localStorage.getItem("token")
  
  // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjkxOTM3ODYxLCJleHAiOjE2OTE5NDE0NjEsIm5iZiI6MTY5MTkzNzg2MSwianRpIjoiWG4zUXQ0ZjBSMG8zVWZzMSIsInN1YiI6IjUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.3QtGLAm4Cr0oyfUQSUsT-rx0OENpGjYik7yxjUPqGUQ';
  
  const getCourses = async () => {
    await axios.get("http://127.0.0.1:8000/api/teacher/courses", {
      "headers": {
          'Authorization': `Bearer ${token}`
      }
  })
    .then(response => {
      console.log(response.data);
      setCourses(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className='courses_body'>
      <Navbar className="nav" one={'Classwork'} two={'Enrollments'}/>
      <CardsContainer courses={courses}/>
    </div>
  )
}
  
  export default TeacherCourses