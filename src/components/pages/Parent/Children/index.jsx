import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./style.css"
import ChildCard from '../../../parent/ChildCard'
import Navbar from '../../../shared/navbar';



const Children = () => {

  const [childrenData, setChildrenData] = useState([]);

  useEffect(() => {
    async function fetchChildrenData() {
      axios.defaults.headers.authorization =  `Bearer ${localStorage.getItem("token")}` ;
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/parent/children');
        setChildrenData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchChildrenData();
  }, []);

  return (
    
    <div className="body">
      
      <div className='c-container'>
        <h2>Your Children</h2>
        <div className="cards_container">
          {childrenData.map(child => (
            <Link to={`/parent/childCourses/${child.id}`}>
              <ChildCard
                key={child.id}
                name={child.name}
                childId={child.id}
                
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
  
};

export default Children