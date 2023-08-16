import React from 'react'
import "./style.css"
import Container from '../../../shared/Container'
import { useEffect, useState } from 'react'
import { sendRequest } from '../../../../config/request'

const StudentEnrollments = () => {

  const defaultState ={
    name: "",
    description:""
  }

  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await sendRequest({ method: 'GET', route: "/enrolled-courses", body:"", });
      setEnrollments(response.data);
      console.log(enrollments)
    } catch (error) {
    }
  };

  return (
    <div>
      <Container element={'enrollment'} data={enrollments}/>
    </div>
  )
}

export default StudentEnrollments