import { Route, Routes } from 'react-router-dom';
import Login from './pages/LoginPage/Login';
import Roles from './pages/RolesPage/Roles';
import StudentSignUp from './pages/SignUpPage/StudentSignUp';
import ProfessorSignUp from './pages/SignUpPage/ProfessorSignUp';
import StudentHome from './pages/HomePage/StudentHome'
import ProfessorHome from './pages/HomePage/ProfessorHome'
import AboutS from './pages/AboutPage/AboutS'
import AboutP from './pages/AboutPage/AboutP'
import StudentSettings from './pages/SettingsPage/StudentSettings'
import ProfessorSettings from './pages/SettingsPage/ProfessorSettings'
import StudentClass from './pages/ClassPage/StudentClass'
import ProfessorClass from './pages/ClassPage/ProfessorClass';
import SecretPage from './pages/SecretPage/SecretPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Login/>}/>
        <Route path='/roles' exact element={<Roles/>}/>
        <Route path='/student-sign-up' exact element={<StudentSignUp/>}/>
        <Route path='/professor-sign-up' exact element={<ProfessorSignUp/>}/>
        <Route path='/student-home' exact element={<StudentHome/>}/>
        <Route path='/professor-home' exact element={<ProfessorHome/>}/>
        <Route path='/about-us-s' exact element={<AboutS/>}/>
        <Route path='/about-us-p' exact element={<AboutP/>}/>
        <Route path='/student-settings/:id' exact element={<StudentSettings/>}/>
        <Route path='/professor-settings/:id' exact element={<ProfessorSettings/>}/>
        <Route path='/student-classes' exact element={<StudentClass/>}/>
        <Route path='/professor-classes' exact element={<ProfessorClass/>}/>
        <Route path='/upanget' exact element={<SecretPage/>}/>
      </Routes>
    </>
  );
}

export default App;
