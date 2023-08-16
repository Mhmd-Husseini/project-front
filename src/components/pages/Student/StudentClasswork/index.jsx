import React from 'react'
import Container from '../../../shared/Container'
import { useEffect, useState } from 'react'
import { sendRequest } from '../../../../config/request'
import { useParams} from 'react-router-dom';
import ClassworkListItem from '../../../Student/ClassworkListItem';
import './style.css'

const StudentClasswork = () => {

  const { course_id } = useParams();

  const [tasks, setTasks] = useState();

  const fetchTasks = async () => {
    try {
      const response = await sendRequest({ method: 'GET', route: `getTasks/${course_id}`, body: "", });
      setTasks(response);

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="tasks-container">
      <div className="tasks-content">

        <div className='tasks-lectures'>
          <span className='title-medium'>Lectures</span>
          {tasks?.quizes && tasks.quizes.map((item) => (
            <div className='lecture-task'>
              <span>{item.title}</span>
              <span>{item.description}</span>
            </div>
          ))}
        </div>

        <div className='tasksss'>
          <div className='person-item'>
            <span>Quizes</span>
          </div>
          {
            tasks?.quizes && tasks.quizes.map((item) => (
              <ClassworkListItem course_id={course_id} item={item} type={'quiz'}/>
            ))
          }
          <div className='person-item'>
            <span>Assignments</span>
          </div>
          {
            tasks?.assignments && tasks.assignments.map((item) => (
              <ClassworkListItem course_id={course_id} item={item} type={'assignment'} />
            ))
          }
        </div>

        <div className='tasks-materials'>
          <div className='person-item'>
            <span>Materials</span>
          </div>
          {tasks?.quizes && tasks.quizes.map((item) => (
            <div className='materials-container'>
              <div>{item.title}</div>
              <span><i class="fa-solid fa-download"></i></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StudentClasswork