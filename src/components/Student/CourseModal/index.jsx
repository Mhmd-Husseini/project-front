import React from 'react'
import './style.css'
import Modal from 'react-modal'
import { sendRequest } from '../../../config/request'

const CourseModal = ({ details, openModal, handleCloseModal }) => {

    async function enrollStudent() {
        try {
            const response = await sendRequest({ method: 'POST', route: `enroll-course/${details.id}`, body: "", });
            console.log(response)
            handleCloseModal()
        } catch (error) {
        }
    }

    return (
        <div>
            <Modal isOpen={openModal} className="modal">
                <div className='course-details'>
                    <div className="course-wrapper">
                        <div className='before-content' onClick={handleCloseModal}>X</div>
                        <span className='title-large'>Taught By {details.teacher_id}</span>
                        <div>
                            <div className='title-medium'>Course Description: <span>{details.description}</span> </div>
                            <div className='title-medium'>Course Category: <span>{details.category_id}</span></div>
                            <div className='title-medium'>Seats: <span>{details.seats}</span></div>
                        </div>
                        <button className='enroll-btn' onClick={enrollStudent}>Enroll</button>
                    </div>
                </div>
            </Modal >
        </div>
    )
}

export default CourseModal