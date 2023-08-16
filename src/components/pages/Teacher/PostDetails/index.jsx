import React, { useState } from 'react';import '../PostDetails/style.css'
import Navbar from '../../../shared/teacherNav/index'
import { Link } from 'react-router-dom'
import AttendanceModal from '../../../shared/AttendanceModel/index'

const PostDetails = () => {
    const postString = localStorage.getItem("post")
    const type = localStorage.getItem("type")
    const post = JSON.parse(postString);
    const postTitle = post.title;
    const postDescription = post.description;
    localStorage.setItem("post_id", post.id);

    const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false);

    const openAttendanceModal = () => {
        setIsAttendanceModalOpen(true);
    };

    const closeAttendanceModal = () => {
        setIsAttendanceModalOpen(false);
    };

    return (
        <div className="submission-container">
            <div className="submission-wrapper">
                <div className="submission-instructions">
                    <div className='t-nav'><Navbar one={'teacher/Classwork'} two={'teacher/Enrollments'}/></div>
                    <div className='t-body'>
                        <span className="title-large">{postTitle}</span>
                        <p>{postDescription}</p>
                    </div>
                    
                </div>
            </div>
            <AttendanceModal openModal={isAttendanceModalOpen} handleCloseModal={closeAttendanceModal} />
            <div className="t-bottom">
                <Link to={'/teacher/Classwork'}><button className="btn">back</button></Link>
                {type === "lecture" && (
                <button className="t-btn" onClick={openAttendanceModal}>
                Attendance
                </button>
                )}

                {(type === "assignment" || type === "quiz") && (
                <Link to="/teacher/solution">
                <button className="t-btn">View Solution</button>
                </Link>)}
            </div>
            
        </div>
    )
}

export default PostDetails;