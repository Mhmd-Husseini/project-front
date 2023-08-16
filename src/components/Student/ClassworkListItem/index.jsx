import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'


const ClassworkListItem = ({course_id, item, type}) => {

    const navigate = useNavigate()

    const navigateToTask = () => navigate(`/Student/Submission/${course_id}/${type}/${item.id}`)

    return (
        <div className='list-item' onClick={navigateToTask}>
            <span>{item.title}</span>
            <span>{item.date}</span>
        </div>
    )
}

export default ClassworkListItem