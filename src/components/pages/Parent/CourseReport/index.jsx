import React, { useState, useEffect }from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import ListContainer from '../../../parent/ListContainer';

const CourseReport = () => {
    const { childId, CourseId } = useParams();
    const [courses, setCourses] = useState([]);
  
    useEffect(() => {
      async function fetchChildCourses() {
        axios.defaults.headers.authorization =  `Bearer ${localStorage.getItem("token")}` ;
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/parent/child/report/${childId}`);
          const selectedCourse = response.data.data.find(course => course.id === Number(CourseId));
          setCourses(selectedCourse);
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      }
  
      fetchChildCourses();
    }, [childId, CourseId]);

  return (
    <div>
      <h1>Course Report</h1>
      <p>Course name: {courses.name}</p>
      <p>Taught by: {courses.teacher && courses.teacher.name}</p>
      <p>Attandence: {courses.attended_count} / {courses.total_lecture_count}</p>
      <div>
        <h3>Assignments</h3>
        {courses.assignments && courses.assignments.map(assignment => (
            <ListContainer key={assignment.id} propstopass={assignment} />
        ))}
      </div>
      <div>
        <h3>Quizzes</h3>
        {courses.quizzes && courses.quizzes.map(quizzes => (
            <ListContainer key={quizzes.id} propstopass={quizzes} />
        ))}
      </div>
    </div>
  )
}

export default CourseReport