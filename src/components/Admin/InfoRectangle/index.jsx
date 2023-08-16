import React from 'react';
import "./style.css";

const InfoRectangle = ({ label, info }) => {
  return (   
    <div className="info-rectangle">
      <div className="info-label">{label}</div>
      <div className="info-value">{info}</div>
    </div>
  );
};
    
export default InfoRectangle;
