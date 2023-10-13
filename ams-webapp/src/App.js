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
import ChangePassword from './pages/SettingsPage/ChangePasswordPage/ChangePassword'
import EditStudent from './pages/SettingsPage/EditInfoPage/EditStudent'
import EditProfessor from './pages/SettingsPage/EditInfoPage/EditProfessor'
import AddStudentClass from './pages/ClassPage/AddClassPage/AddStudentClass'
import AddProfessorClass from './pages/ClassPage/AddClassPage/AddProfessorClass'
import StudentTimeTable from './pages/TimeTablePage/StudentTimeTable'
import ProfessorTimeTable from './pages/TimeTablePage/ProfessorTimeTable'
import EditStudentClass from './pages/ClassPage/EditClassPage/EditStudentClass'
import EditProfessorClass from './pages/ClassPage/EditClassPage/EditProfessorClass'
import StudentAttendance from './pages/TimeTablePage/StudentTimeTableSelection/StudentAttendance'
import ProfessorAttendance from './pages/TimeTablePage/ProfessorTimeTableSelection/ProfessorAttendance'
import StudentAttendaceSheet from './pages/TimeTablePage/StudentTimeTableSelection/StudentAttendanceSheet'
import ProfessorShowClassAttendance from './pages/TimeTablePage/ProfessorTimeTableSelection/ProfessorShowClassAttendance'

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
        <Route path='/add-student-classes' exact element={<AddStudentClass/>}/>
        <Route path='/add-professor-classes' exact element={<AddProfessorClass/>}/>
        <Route path='/edit-student-classes' exact element={<EditStudentClass/>}/>
        <Route path='/edit-professor-classes' exact element={<EditProfessorClass/>}/>
        <Route path='/changepass' exact element={<ChangePassword/>}/>
        <Route path='/student-editprofile' exact element={<EditStudent/>}/>
        <Route path='/professor-editprofile' exact element={<EditProfessor/>}/>
        <Route path='/student-timetable' exact element={<StudentTimeTable/>}/>
        <Route path='/professor-timetable' exact element={<ProfessorTimeTable/>}/>
        <Route path='/timetable/time-in/student' exact element={<StudentAttendance/>}/>
        <Route path='/timetable/time-in/professor' exact element={<ProfessorAttendance/>}/>
        <Route path='/time-table/check-attendance/student' exact element={<StudentAttendaceSheet/>}/>
        <Route path='/time-table/check-attendance/professor' exact element={<ProfessorShowClassAttendance/>}/>
        <Route path='/upanget' exact element={<SecretPage/>}/>
      </Routes>
    </>
  );
}

export default App;
