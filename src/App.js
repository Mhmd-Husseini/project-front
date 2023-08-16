import './App.css';
import Landing from './components/pages/landing';
import AdminLayout from './components/pages/Admin/AdminLayout';
import ParentMain from './components/pages/Parent/ParentMain';
// import Son from './components/pages/Parent/Son';
import StudentClasses from './components/pages/Student/StudentClasses';
import TeacherClasses from './components/pages/Teacher/TeacherClasses';
import StudentLayout from './components/pages/Student/StudentLayout';
import './App.css' 

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />

        <Route path="/admin/*" element={<AdminLayout />} />

        <Route path="/teacher" >
          <Route index element={<TeacherClasses />} />
        </Route>

        <Route path="/Student/*" element={<StudentLayout />} />

        <Route path='/parent/*' element={<ParentMain />} />


        <Route path="*" element={<Landing />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
