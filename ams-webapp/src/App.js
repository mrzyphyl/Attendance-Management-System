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
import EmailConfirmation from './pages/SettingsPage/ChangePasswordPage/EmailConfirmation'
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
import { useState } from 'react';

function App() {
  const userId = localStorage.getItem('userId')
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = useState(!!userId)

  return (
    <>
      <Routes>
        {/* If the user is not logged in, render this routes */}
        <Route path='/' element={<Login />} />
        <Route path='/student-sign-up' element={<StudentSignUp />} />
        <Route path='/professor-sign-up' element={<ProfessorSignUp />} />
        <Route path='/roles' element={<Roles />} />

        <Route path='/student-home' element={<StudentHome />} />
        <Route path='/professor-home' element={<ProfessorHome />} />
        <Route path='/about-us-s' element={<AboutS />} />
        <Route path='/about-us-p' element={<AboutP />} />
        <Route path='/student-settings' element={<StudentSettings />} />
        <Route path='/professor-settings' element={<ProfessorSettings />} />
        <Route path='/student-classes' element={<StudentClass />} />
        <Route path='/professor-classes' element={<ProfessorClass />} />
        <Route path='/add-student-classes' element={<AddStudentClass />} />
        <Route path='/add-professor-classes' element={<AddProfessorClass />} />
        <Route path='/edit-student-classes' element={<EditStudentClass />} />
        <Route path='/edit-professor-classes' element={<EditProfessorClass />} />
        <Route path='/changepass' element={<ChangePassword />} />
        <Route path='/emailconfirmpass' element={<EmailConfirmation />} />
        <Route path='/student-editprofile' element={<EditStudent />} />
        <Route path='/professor-editprofile' element={<EditProfessor />} />
        <Route path='/student-timetable' element={<StudentTimeTable />} />
        <Route path='/professor-timetable' element={<ProfessorTimeTable />} />
        <Route path='/timetable/time-in/student' element={<StudentAttendance />} />
        <Route path='/timetable/time-in/professor' element={<ProfessorAttendance />} />
        <Route path='/time-table/check-attendance/student' element={<StudentAttendaceSheet />} />
        <Route path='/time-table/check-attendance/professor' element={<ProfessorShowClassAttendance />} />

        <Route path='/upanget' element={<SecretPage />} />
      </Routes>
    </>
  );
}

export default App;
