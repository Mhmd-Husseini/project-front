import '../ViewSolution/style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewSolutions = () => {
  const [solutions, setSolutions] = useState([]);
  const token = localStorage.getItem("token")
  const type = localStorage.getItem("type")
  const post_id = localStorage.getItem("post_id")
  useEffect(() => {
    fetchSolutions();
  }, []);

  const fetchSolutions = async () => {
    // console.log(type, post_id)
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/submissions/${type}/${post_id}`,{
        "headers": {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data.submissions)
      setSolutions(response.data.submissions);
    } catch (error) {
      console.error('Error fetching solutions:', error);
    }
  };

  const AddGrade = async (submissionId, newGrade) => {
    try {
      const requestBody = {
        submission_id: submissionId,
        grade: newGrade
      };
  
      const response = await axios.post(
        'http://127.0.0.1:8000/api/submissions/update',
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
  
      console.log('Response:', response.data);
  
      const updatedSolutions = solutions.map((solution) =>
        solution.id === submissionId ? { ...solution, grade: newGrade } : solution
      );
  
      setSolutions(updatedSolutions);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className='solution_head'>
        <h1>View Solutions</h1>
        <Link to={'/teacher/PostDetails'}><button>Back</button></Link>
      </div>
      <div className='solution_body'>
        <table className='teacher_table'>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Solution</th>
              <th>Grade</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {solutions.map(solution => (
              <tr key={solution.id}>
                <td>{solution.student.name}</td>
                <a className='file_link' href={`http://127.0.0.1:8000/${solution.file}`} target="_blank" rel="noopener noreferrer">View Solution</a>
                <td>
                  <input
                    type="number"
                    value={solution.grade}
                    onChange={e => {const newGrade = parseInt(e.target.value);
                      setSolutions(prevSolutions =>
                        prevSolutions.map(prevSolution =>
                          prevSolution.id === solution.id ? { ...prevSolution, grade: newGrade } : prevSolution
                        )
                      );}}
                  />
                </td>
                <td><button onClick={() => AddGrade(solution.id, solution.grade)}>Add/Update Grade</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewSolutions;
