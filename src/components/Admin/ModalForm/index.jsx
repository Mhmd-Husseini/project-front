import React, { useState } from "react";
import "./style.css";
import Modal from "react-modal";
import { sendRequest } from "../../../config/request";

const ModalForm = ({ user, handleCloseModal, OpenModal, onUpdate, isAdding }) => {
  const [data, setData] = useState(isAdding ? {} : user);

  const userTypes = [{ id: 1, name: "Admin" },{ id: 2, name: "Teacher" },{ id: 3, name: "Student" },{ id: 4, name: "Parent" }];

  const handleDataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (isAdding) {
      try {
        const response = await sendRequest({
          method: "POST",
          route: "/admin/users/addUser",
          body: data,
        });
        console.log("Added user:", response);
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
          {isAdding ? ( <h2>Add User</h2>) : ( <h2>Update User: {user.id}</h2>)}
          <label>ID</label>
          <input type="text" disabled className="input-field" value={data.id || ""}  />
          <label>Name</label>
          <input type="text" className="input-field" name="name" value={data.name || ""} onChange={handleDataChange} />
          <label>Email</label>
          <input type="text" className="input-field" name="email" value={data.email || ""} onChange={handleDataChange} />
          <label>Password</label>
          <input type="password" className="input-field" name="password" value={data.password || ""} onChange={handleDataChange}/>
          <label>User Type</label>
          <select className="input-field" name="user_type_id" value={data.user_type_id || ""} onChange={handleDataChange} >
            <option value="" disabled>Select User Type</option>
            {userTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
          <label>Parent_id</label>
          <input type="number" className="input-field" name="parent_id" value={data.parent_id || ""} onChange={handleDataChange}/>
          <button type="submit" className="submit-button" onClick={handleSubmit} >
            {isAdding ? "Add User" : "Update User"}
          </button>
          <button onClick={handleCloseModal} className="cancel-button">
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalForm;
