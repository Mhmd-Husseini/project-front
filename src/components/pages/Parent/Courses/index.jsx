import React, { useState, useEffect }from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

const Courses = () => {

    const { childId } = useParams();
    const [courses, setCourses] = useState([]);
  
    useEffect(() => {
      async function fetchChildCourses() {
        axios.defaults.headers.authorization =  `Bearer ${localStorage.getItem("token")}` ;
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/parent/child/report/${childId}`);
          setCourses(response.data.data);
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      }
  
      fetchChildCourses();
    }, []);



  return (
    <div>
      <h2>Courses for Child </h2>
        <div className="cards_container">
          {courses.map(course => (
            <Link to={`/parent/childCourses/${childId}/${course.id}`} key={course.id}>
              <div className="single_card" key={course.id}>
        
                <h3>{course.name}</h3>
              
              </div>
            </Link>
          ))}
       </div>
    </div>
  )
}

export default Courses