import Modal from 'react-modal';
import '../AttendanceModel/style.css';
import StudentAttendance from '../teacherAttendance/index';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AttendanceModal = ({ openModal, handleCloseModal }) => {

    let [students, setStudents] = useState([]);
    const token = localStorage.getItem("token")
    const courseid = localStorage.getItem("courseid")

    const getStudnets = async () => {
        await axios.get(`http://127.0.0.1:8000/api/teacher/courses/${courseid}`, {
          "headers": {
              'Authorization': `Bearer ${token}`
          }
    })
    .then(response => {
        setStudents(response.data.course.students);
    })
    .catch(error => {
      console.log(error);
    });
    };
    
    useEffect(() => {
        getStudnets();
    }, []);


    let dataToSend = [];
    students.map((student)=>{
        dataToSend.push({
            'lecture_id' : parseInt(student.lecture_id),
            "user_id" : student.id,
            "attend" : student.attend,
        });
    })

    console.log(dataToSend)

    const course_id = localStorage.getItem("courseid");
    const lecture_id = localStorage.getItem("post_id")
    console.log(lecture_id)
    const submit = async() => {

        try {
            const response = await axios.post(
                `/teacher/courses/${course_id}/lecture/attendance`,
                dataToSend,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            console.log(response.data);
            handleCloseModal()
        } catch (error) {
            console.error(error);
        }
    }


    console.log('before ', students);

    const updateAttendance = ($user_id , ischecked)=>{
        console.log(students)
        const updatedStudent = students.map((student)=>{
            if (student.id  == $user_id)
                return {
                    ...student,
                    attend:ischecked? 1: 0,
                    lecture_id: lecture_id
            };

            return student;
        });
        
        setStudents(updatedStudent);
        
    }


    return (
        <div >
            <Modal isOpen={openModal} className="attend_modal">
                <div className='attend_head'>
                    <div><h2>Attendance</h2></div>
                    <div onClick={handleCloseModal} className='exit'>x</div>
                </div>
                <div>
                    {students.map((student) => (
                        <StudentAttendance key={student.id} info={student} updateAttendance= {updateAttendance} />
                    ))}
                </div>
                <div className='btn'  onClick={submit}><button>Submit</button></div>
            </Modal>

        </div>
    )
}

export default AttendanceModal