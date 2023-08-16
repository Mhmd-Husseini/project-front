import React, { useState, useEffect } from 'react';
import UsersTable from '../../../Admin/UsersTable';
import { useNavigate } from "react-router-dom"
import { sendRequest } from '../../../../config/request';
import ModalForm from '../../../Admin/ModalForm';
import './style.css'


const AdminAdmin = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };


  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await sendRequest({ method: 'GET', route: "/admin/users/getUsers/1", body:"", });
      setUsers(response);
      console.log(response)  
    } catch (error) {
      navigate ("/");
    }
  };

  const handleDelete = async (userId) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this user?");
      if (confirmDelete) {
        await sendRequest({ method: 'DELETE', route: `/admin/users/deleteUser/${userId}` });
          fetchUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      <UsersTable users={users}  onDelete={handleDelete} fetchUsers={fetchUsers} />
    </div>
  );
};

export default AdminAdmin;
