import React from 'react'
import TeacherCard from '../teacherCard/index'
import './style.css'

const CardsContainer = ({courses}) => {
  return (
    <div className='t-course-container'>
        <div className="t-course-content">
            {courses.map((course) => (
                <TeacherCard key={course.id} id={course.id} name={course.name} description={course.description} />
            ))}
        </div>
    </div>
  )
}

export default CardsContainer