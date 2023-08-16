import React from 'react'
import Container from '../../../shared/Container'
import ChatModal from '../../../Student/ChatModal'
import Person from '../../../Student/Person'
import { useEffect, useState } from 'react'
import { sendRequest } from '../../../../config/request'
import { useParams } from 'react-router-dom';
import './style.css'

const StudentChat = () => {

  const { course_id } = useParams();

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const [people, setPeople] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState()
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetchClassmates();
    
  }, []);

  useEffect(() => {
    fetchMsgs();
  }, [selectedPerson]);

  const fetchClassmates = async () => {
    try {
      const response = await sendRequest({ method: 'GET', route: `classmates/${course_id}`, body: "", });
      setPeople(response.data);
      setTeacher(response.teacher)

    } catch (error) {
    }
  };

  const fetchMsgs = async () => {
    try {
      const response = await sendRequest({ method: 'GET', route: `/chat/${selectedPerson.id}`, body: "", });
      setMessages(response.data)
      console.log(messages)
    } catch (error) {
    }
  };

  return (
    <div>
      <div className='teacher'>
        <Person  setSelectedPerson={setSelectedPerson} teacher={'teacher'} item={teacher} handleOpenModal={handleOpenModal}></Person>
      </div>
      <Container setSelectedPerson={setSelectedPerson} teacher={teacher} element={'person'} data={people} handleOpenModal={handleOpenModal} />
      <ChatModal messages={messages} person={selectedPerson} openModal={openModal} handleCloseModal={handleCloseModal} />
    </div>
  )
}

export default StudentChat