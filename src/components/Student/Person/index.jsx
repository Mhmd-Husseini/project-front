import React from 'react'
import './style.css'

const Person = ({setSelectedPerson, teacher, item, handleOpenModal }) => {

  const grabPerson = async () => {
    // try {
    //   const response = await sendRequest({ method: 'GET', route: `/chat/${item.id}`, body: "", });
    //   setMessages(response.data)
    //   console.log(response.data)
    // } catch (error) {
    //   console.log(error)
    // }
    setSelectedPerson(item)
    handleOpenModal()
  }


  if (!teacher) {
    return (
      <div className='person-item'>
        <span>{item.name}</span>
        <i class="fa-regular fa-comment chat-icon" onClick={grabPerson}></i>
      </div>
    )
  } else {
    return (
      <>
        <div className='person-item'>
          <span className='title'>Teacher</span>
          <span>{item.name}</span>
          <i class="fa-regular fa-comment chat-icon" onClick={grabPerson}></i>
        </div>
      </>
    )
  }
}

export default Person