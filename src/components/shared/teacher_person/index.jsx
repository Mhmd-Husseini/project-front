import React from 'react'
import './style.css';
// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComment } from '@fortawesome/free-regular-svg-icons';

const Person = ({info, handleOpenModal}) => {

  return (
    <div className='t-body'>
      <div className='t-person-item t-student'>
        <span>Student: {info.name}</span>
        <a href="#" className='t-icons' onClick={() => handleOpenModal(info)}>
          <span>Chat</span>
        </a>
      </div>
      <div className='t-person-item'>
        <span>Parent: {info.parent.name}</span>
        <a href="#" className='t-icons' onClick={() => handleOpenModal(info)}>
          <span>Chat</span>
        </a>  
      </div>

    </div>
    

  )
}

export default Person