// import React, { useState, useEffect }from 'react'
// import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
// import ListContainer from '../../../parent/ListContainer';

// function CourseReport() {
//   const { childId, courseId } = useParams();
//   const [course, setCourse] = useState(null);

//   useEffect(() => {
//       async function fetchCourseInfo() {
//           try {
//               const response = await axios.get(`http://127.0.0.1:8000/api/parent/child/report/${childId}/${courseId}`);
//               const data = response.data.data; // Assuming the response structure remains the same

//               // Find the course with the specified courseId
//               const courseData = data.find(course => course.id === Number(courseId));

//               if (courseData) {
//                   setCourse(courseData);
//                   console.log(course)
//               } else {
//                   console.log('Course not found.');
//               }
//           } catch (error) {
//               console.error('Error fetching course data:', error.message);
//           }
//       }

//       fetchCourseInfo();
//   }, [childId, courseId]);import React, { useState, useEffect } from 'react';
//   import axios from 'axios';
  
//   function StudentDetailsPage({ match }) {
//       const { id, courseId } = match.params; // Get parameters from the URL
//       const [studentData, setStudentData] = useState(null);
  
//       useEffect(() => {
//           async function fetchStudentData() {
//               try {
//                   const response = await axios.get(`/api/parent/child/report/${id}/${courseId}`);
//                   setStudentData(response.data);
//               } catch (error) {
//                   console.error('Error fetching student data:', error);
//               }
//           }
  
//           fetchStudentData();
//       }, [id, courseId]);
  
//       return (
//           <div>
//               <h1>Student Details</h1>
//               {studentData ? (
//                   <div>
//                       <h2>Submissions</h2>
//                       <ul>
//                           {studentData.submissions.map(submission => (
//                               <li key={submission.id}>
//                                   Submission ID: {submission.id}, Grade: {submission.grade}
//                               </li>
//                           ))}
//                       </ul>
//                       <p>Attendance Ratio: {studentData.attendanceRatio}%</p>
//                   </div>
//               ) : (
//                   <p>Loading...</p>
//               )}
//           </div>
//       );
//   }
  
//   export default StudentDetailsPage;
  

//   return (
//     <div>
//       <h1>Course Report</h1>
//       {/* <p>Course name: {course.title}</p>
//       <p>Taught by: {course.teacher && course.teacher.name}</p>
//       <p>Attandence: {course.attended_count} / {courses.total_lecture_count}</p>
//       <div>
//         <h3>Assignments</h3>
//         {course.assignments && course.assignments.map(assignment => (
//             <ListContainer key={assignment.id} propstopass={assignment} />
//         ))}
//       </div>
//       <div>
//         <h3>Quizzes</h3>
//         {course.quizzes && course.quizzes.map(quizzes => (
//             <ListContainer key={quizzes.id} propstopass={quizzes} />
//         ))}
//       </div> */}
//     </div>
//   )
// }

// export default CourseReport



import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CourseReport() {
  const { childId, courseId } = useParams();
    const [studentData, setStudentData] = useState(null);
console.log(courseId)
console.log(childId)

    useEffect(() => {
        async function fetchStudentData() {
          axios.defaults.headers.authorization =  `Bearer ${localStorage.getItem("token")}` ;
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/parent/child/report/${childId}/${courseId}`);
                console.log(response);

                setStudentData(response.data);
                console.log(response.data.submissions);

            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        }

        fetchStudentData();
    }, [childId, courseId ]);

    return (
        <div>
            <h1>Student Details</h1>
            {studentData ? (
                <div>
                    <h2>Submissions</h2>
                    <ul>
                        {studentData.submissions.map(submission => (
                            <li key={submission.id}>
                                Submission ID: {submission.id}, Grade: {submission.grade}
                            </li>
                        ))}
                    </ul>
                    <p>Attendance Ratio: {studentData.attendanceRatio}%</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default CourseReport
