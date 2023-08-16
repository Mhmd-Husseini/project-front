import Navbar from '../../../shared/teacherNav/index'
import ClassworkPost from '../../../shared/teacherClassworkPost/index';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../ClassWork/style.css';
import { useParams, Link } from 'react-router-dom';
import AddPostFormModal from '../../../shared/AddPostModel/index';

const Classwork = () => {
  const { id } = useParams();
  console.log(id);

  const [addPostModalOpen, setIsAddPostModalOpen] = useState(false);

  const openAddPostModal = () => {
    setIsAddPostModalOpen(true);
  };

  const closeAddPostModal = () => {
    setIsAddPostModalOpen(false);
  };

  let [assignments , setAssignments] = useState([]);
  let [quizzes , setQuizzes] = useState([]);
  let [lectures , setLeactures] = useState([]);
  let [materials , setMaterials] = useState([]);
  let [name , setName] = useState('');

  const token = localStorage.getItem("token")
  const courseid = localStorage.getItem("courseid")

  const getPosts = async () => {
    await axios.get(`http://127.0.0.1:8000/api/teacher/courses/${courseid}`, {
      "headers": {
          'Authorization': `Bearer ${token}`
      }
  })
    .then(response => {
      console.log(response.data.course);
      setAssignments(response.data.course.assignments);
      setQuizzes(response.data.course.quizes);
      setLeactures(response.data.course.lectures);
      setMaterials(response.data.course.materials);
      setName(response.data.course.name)
    })
    .catch(error => {
      console.log(error);
    });
  };

  useEffect(() => {
    getPosts();
  }, [courseid]);

  return (
      <div className='classwork'>
        <div className='t-nav'><Navbar one={'teacher/Classwork'} two={'teacher/Enrollments'}/></div>
        <div className='t_body_classwork'>
          <div className='course_head'>
            <div><h1>{name}</h1></div>
            <div>
              <button onClick={openAddPostModal}>Add Post</button>
              <button><Link to={`/teacher`}> Back </Link> </button> 
            </div>
          </div>

          <AddPostFormModal openModal={addPostModalOpen} handleCloseModal={closeAddPostModal} />

          <div className='posts_section'>
            <h2 className='postsTitle'>Lectures</h2>
            {lectures.map((lecture) => (
                <ClassworkPost post={lecture} type={'lecture'}/>
            ))}
          </div>
          <div className='posts_section'>
            <h2 className='postsTitle'>Materials</h2>
            {materials.map((material) => (
              <ClassworkPost post={material} type={'material'}/>
            ))}
          </div>
          <div className='posts_section'>
            <h2 className='postsTitle'>Quizzes</h2>
            <div className='post_body'>
              {quizzes.map((quiz) => (
                  <ClassworkPost post={quiz} type={'quiz'}/>
              ))} 
            </div>
            
          </div>
          <div className='posts_section'>
            <h2 className='postsTitle'>Assignments</h2>
            {assignments.map((assignment) => (
                <ClassworkPost post={assignment} type={'assignment'}/>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Classwork;