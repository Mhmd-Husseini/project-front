import React from 'react'
import Container from '../../../shared/Container'
import { useEffect, useState } from 'react'
import { sendRequest } from '../../../../config/request'
import { useParams } from 'react-router-dom';


const StudentClasswork = () => {

  const { course_id } = useParams();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await sendRequest({ method: 'GET', route: `getTasks/${course_id}`, body:"", });
      setTasks(response.tasks);
      
    } catch (error) {
    }
  };
  
  return (
    <div>
      <Container course_id={course_id} element={'task'} data={tasks} />
    </div>
  )
}

export default StudentClasswork