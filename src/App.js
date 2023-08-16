import './App.css';
import Landing from './components/pages/landing';
import AdminLayout from './components/pages/Admin/AdminLayout';
import ParentMain from './components/pages/Parent/ParentMain';
// import Son from './components/pages/Parent/Son';
import StudentClasses from './components/pages/Student/StudentClasses';
import StudentLayout from './components/pages/Student/StudentLayout';
import TeacherCourses from './components/pages/Teacher/teacherCourses/index';
import TeacherCourseDetails from './components/pages/Teacher/CourseDetails/index';
import TeacherClasswork from './components/pages/Teacher/ClassWork/index';
import TeacherEnrollments from './components/pages/Teacher/Enrollments/index';
import PostDetails from './components/pages/Teacher/PostDetails/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewSolutions from './components/pages/Teacher/ViewSolution/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />

        <Route path="/admin/*" element={<AdminLayout />} />

        <Route path="/teacher" >
          <Route index element={<TeacherCourses />} />
          <Route path="CourseDetails/:teacherId" element={<TeacherCourseDetails />} />
          <Route path="Classwork" element={<TeacherClasswork />} />
          <Route path="enrollments" element={<TeacherEnrollments />} />
          <Route path="PostDetails" element={<PostDetails />} />
          <Route path="Solution" element={<ViewSolutions />} />
        </Route> 

        <Route path="/Student/*" element={<StudentLayout />} />

        <Route path='/parent/*' element={<ParentMain />} />


        <Route path="*" element={<Landing />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
