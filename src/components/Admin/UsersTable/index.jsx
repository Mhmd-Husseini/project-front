import React, { useState } from "react";
import "./style.css";
import ModalForm from "../ModalForm";
import { sendRequest } from '../../../config/request';

const UsersTable = ({ users, onDelete, fetchUsers }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddingUser, setIsAddingUser] = useState(false);

  const handleOpenModal = (user, isAdding = false) => {
    setSelectedUser(user);
    setIsModalOpen(true);
    setIsAddingUser(isAdding);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
    fetchUsers();
  };

  const handleUpdateUser = async (updatedData) => {
    try {
      const response = await sendRequest({
        method: 'POST',
        route: "/admin/users/updateUser",
        body: updatedData,
      });
      console.log("Updated user:", response);
      handleCloseModal();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="TableContainer">
      <button onClick={() => handleOpenModal(null, true)}>Add</button>

      <table className="Table">
        <thead>
          <tr>
            <th className="TableHeader">ID</th>
            <th className="TableHeader">Name</th>
            <th className="TableHeader">Email</th>
            <th className="TableHeader">Parent</th>
            <th className="TableHeader">Created At</th>
            <th className="TableHeader">Actions</th>
          </tr>
        </thead>
        <tbody>       
          {users.map((user) => (
            <tr key={user.id} className="TableRow">
              <td className="TableCell">{user.id}</td>
              <td className="TableCell">{user.name}</td>
              <td className="TableCell">{user.email}</td>
              <td className="TableCell">{user.parent_id}</td>
              <td className="TableCell">{user.created_at}</td>              
              <td className="ActionsCell">
                <button onClick={() => handleOpenModal(user)}>Update</button>
                <button onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <ModalForm user={selectedUser} handleCloseModal={handleCloseModal} OpenModal={isModalOpen}onUpdate={handleUpdateUser}isAdding={isAddingUser} />
      )}
    </div>
  );
};

export default UsersTable;
