import React from 'react'
import './style.css'
import { sendRequest } from '../../../config/request';
import CourseModal from '../../Student/CourseModal';
import { useNavigate } from 'react-router-dom'

const Card = ({ type, setSelectedCourse, course, handleOpenModal }) => {

    const navigate = useNavigate()

    const grabCourse = async () => {
        setSelectedCourse(course)
        handleOpenModal()
    }

    const navigateToTasks = () => navigate(`/Student/Classwork/${course.id}`)
    const navigateToChat = () => navigate(`/Student/Chat/${course.id}`)

    if (!type) {
        return (
            <>
                <div className="card" onClick={grabCourse}>
                    <span className='course-title'>{course.name}</span>
                </div>
            </>
        )
    } else {
        return (
            <div className='class-container'>
                <div className='card2' onClick={navigateToTasks}>
                    <div className='course-title2'><span>{course.name}</span></div>
                    <div>Assignment</div>
                </div>
                <button onClick={navigateToChat}>Chat Room</button>
            </div>
        )
    }
}

export default Card