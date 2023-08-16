import React, { useState } from "react";
import "./style.css";
import ModalFormCourses from "../ModalFormCourses";
import { sendRequest } from '../../../config/request';

const CoursesTable = ({ courses, onDelete, fetchCourses }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddingCourse, setIsAddingCourse] = useState(false);

  const handleOpenModal = (course, isAdding = false) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
    setIsAddingCourse(isAdding);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
    fetchCourses();
  };

  const handleUpdateCourse = async (updatedData) => {
    try {
      const response = await sendRequest({
        method: 'POST',
        route: "/admin/courses/updateCourse",
        body: updatedData,
      });
      console.log("Updated course:", response);
      handleCloseModal();
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  return (
    <div className="TableContainer">
      <button onClick={() => handleOpenModal(null, true)}>Add</button>

      <table className="Table">
        <thead>
          <tr>
            <th className="TableHeader">ID</th>
            <th className="TableHeader">Title</th>
            <th className="TableHeader">Description</th>
            <th className="TableHeader">Teacher ID</th>
            <th className="TableHeader"> Category</th>
            <th className="TableHeader">Created At</th>
            <th className="TableHeader">Enrollments</th>
            <th className="TableHeader">Seats</th>
            <th className="TableHeader">Actions</th>
          </tr>
        </thead>
        <tbody>       
          {courses.map((course) => (
            <tr key={course.id} className="TableRow">
              <td className="TableCell">{course.id}</td>
              <td className="TableCell">{course.name}</td>
              <td className="TableCell">{course.description}</td>
              <td className="TableCell">{course.teacher_id}</td>
              <td className="TableCell">{course.category.category}</td>
              <td className="TableCell">{course.created_at}</td>
              <td className="TableCell">{course.enrolled_students_count}</td>     
              <td className="TableCell">{course.seats}</td>                       
              <td className="ActionsCell">
                <button onClick={() => handleOpenModal(course)}>Update</button>
                <button onClick={() => onDelete(course.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (<ModalFormCourses course={selectedCourse} handleCloseModal={handleCloseModal} OpenModal={isModalOpen} onUpdate={handleUpdateCourse}isAdding={isAddingCourse}/>
      )}
    </div>
  );
};

export default CoursesTable;
