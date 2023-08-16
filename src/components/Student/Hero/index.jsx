import React from 'react'
import './style.css'

const Hero = ({course_name}) => {
  return (
    <div className='heroo'><span className='course-name'>{course_name}</span></div>
  )
}

export default Hero