import React, { useState } from "react";
import "./style.css";
import Modal from "react-modal";
import { sendRequest } from "../../../config/request";

const ModalFormCourses = ({ course, handleCloseModal, OpenModal, onUpdate, isAdding }) => {
  const [data, setData] = useState(isAdding ? {} : course);

  const courseCategory = [{ id: 1, name: "Math" },{ id: 2, name: "Science" },{ id: 3, name: "Chemistry" },{ id: 4, name: "English" }];

  const handleDataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (isAdding) {
      try {
        const response = await sendRequest({
          method: "POST",
          route: "/admin/courses/addCourse",
          body: data,
        });
        console.log("Added course:", response);
        handleCloseModal();
      } catch (error) {
        console.error("Error adding user:", error);
      }
    } else {
      onUpdate(data);
      handleCloseModal();
    }
  };

  return (
    <div>
      <Modal isOpen={OpenModal} className="modal">
        <div className="container">
          {isAdding ? ( <h2>Add Course</h2>) : ( <h2>Update User: {course.id}</h2>)}
          <label>ID</label>
          <input type="text" disabled className="input-field" value={data.id || ""}  />
          <label>Name</label>
          <input type="text" className="input-field" name="name" value={data.name || ""} onChange={handleDataChange} />
          <label>Description</label>
          <input type="text" className="input-field" name="description" value={data.description || ""} onChange={handleDataChange} />
          <label>Teacher_id</label>
          <input type="integer" className="input-field" name="teacher_id" value={data.teacher_id || ""} onChange={handleDataChange}/>
          <label>Seats</label>
          <input type="integer" className="input-field" name="seats" value={data.seats || ""} onChange={handleDataChange}/>
          <label>Category</label>
          <select className="input-field" name="category_id" value={data.category_id || ""} onChange={handleDataChange} >
            <option value="" disabled>Select Course Category</option>
            {courseCategory.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <button type="submit" className="submit-button" onClick={handleSubmit} >
            {isAdding ? "Add Course" : "Update Course"}
          </button>
          <button onClick={handleCloseModal} className="cancel-button">
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalFormCourses;
