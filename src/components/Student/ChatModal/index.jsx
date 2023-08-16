import React, { useState } from 'react'
import './style.css'
import Modal from 'react-modal'
import { sendRequest } from '../../../config/request'

const ChatModal = ({messages, person, openModal, handleCloseModal }) => {
  // console.log(messages)
  const defaultState = {
    message: '',
  }
  const [data, setData] = useState(defaultState)

  const handleDataChange = (e) => {
    setData({ [e.target.name]: e.target.value });
  };
  async function sendMessage() {

    try {
      const response = await sendRequest({
        method: "POST",
        route: `chat/${person.id}/send`,
        body: data,
      });
      setData({ message: "" })
      handleCloseModal();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }

  return (
    <div>
      <Modal isOpen={openModal} className="modal">
        <div className='chat-container'>
          {/* <div className='chat-header'>Messages */}
            {messages.map((msg, index) => {
              if(msg.user1_id == person.id){
                return <div className='sender' key={index}>{person.name}: {msg.message}</div>
              }else{return <div className='receiver' key={index}>You: {msg.message}</div>}
            })}
          {/* </div> */}
          <div className='before-content' onClick={handleCloseModal}>X</div>
          <textarea name="message" value={data.message || ""} onChange={handleDataChange} className='message-input' placeholder='Enter your message here'></textarea>
          <div className='filler'><i className="fa-solid fa-paper-plane send-icon" onClick={sendMessage}></i></div>
        </div>
      </Modal>
    </div>
  )
}

export default ChatModal