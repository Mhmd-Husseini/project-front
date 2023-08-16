import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const ClassworkPost = ({post, type}) => {
    console.log(post)
    const handleClick = () => {
        localStorage.setItem("post", JSON.stringify(post));
        localStorage.setItem("type", type);
    };

    return (
        <Link to={'/teacher/PostDetails'} onClick={handleClick}>
            <div className='t-post_body'>
                <div className='t-content'>
                    <div className='t-title'>{post.title}</div>
                    <div>{post.date} {post.due}</div>
                </div>
            </div>
        </Link>
        
    )
}

export default ClassworkPost