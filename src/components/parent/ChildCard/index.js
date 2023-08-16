import React from 'react';
import "./style.css";


const ChildCard = ({ name }) => {
    

  return(
    <div className="single_card">
    
    <h3>{name}</h3>
    
  </div>
  )
};

export default ChildCard;