import React from 'react'
import "./style.css"
import Container from '../../../shared/Container'
import CourseModal from '../../../Student/CourseModal'
import { useEffect, useState } from 'react'
import { sendRequest } from '../../../../config/request'

const StudentClasses = () => {

  const defaultState = {
      "id": 1,
      "category_id": "Math",
      "teacher_id": "nour younes",
      "name": "Algebra",
      "description": "lorem",
      "seats": 10
  }

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(defaultState)

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await sendRequest({ method: 'GET', route: "/courses", body: "", });
      setCourses(response.courses);
      setCategories(response.categories);

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      {/* categories */}
      <div className='categories-container'>
        {categories.map((item, index) => {
          return <button>{item}</button>
        })}
      </div>
      {/* courses container  */}
      <Container
        setSelectedCourse={setSelectedCourse}
        element={'course'}
        data={courses}
        handleOpenModal={handleOpenModal} />
      {/* Modal */}
      <CourseModal details={selectedCourse}
        openModal={openModal}
        handleCloseModal={handleCloseModal} />
    </div>
  )
}

export default StudentClasses