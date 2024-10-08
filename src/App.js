import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { getCookie } from './constants';
import AdminAppointments from './routes/adminAppointments';
import Appointments from './routes/appointments';
import Dashboard from './routes/dashboard';
import Help from './routes/help';
import ImmunizationRegistry from './routes/immunizationRegistry';
import Enrollments from './routes/immunizationRegistry/enrollments';
import Login from './routes/login';
import LoginAdmin from './routes/loginAdmin';
import Oops from './routes/oops';
import Profile from './routes/profile';
import PublicProfile from './routes/profile/publicProfile';
import Public from './routes/public';
import Registration from './routes/registration';
import Settings from './routes/settings';
import Signup from './routes/signup';
import Traveller from './routes/traveller';
import Vaccination from './routes/vaccination';
import Milestones from './routes/developmentMilestones';
import ADeworming from './routes/vitaminADeworming';
import GrowthMonitoring from './routes/growthMonitoring';
import PublicHealthRegistry from './routes/publicHealthRegistry';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path='register' element={<Registration />} />
        <Route path='login' element={<Login />} />
        <Route path='loginAdmin' element={<LoginAdmin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='appointments' element={<RequireAuth><Appointments /></RequireAuth>} />
        <Route path='adminAppointments' element={<RequireAuth><AdminAppointments /></RequireAuth>} />
        {/* <Route path='vaccination' element={<Vaccination />} /> */}
        <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path='publicProfile/:id' element={<PublicProfile />} />
        <Route path='public/:id' element={<Public />} />
        <Route path='traveller/:id' element={<Traveller />} />
        <Route path='help' element={<Help />} />
        <Route path='publicHealthRegistry' element={<PublicHealthRegistry />} />
        {/* <Route path='publicHealthCareRegistry/Diagnosis' element={<Diagnosis />} />
        <Route path='publicHealthCareRegistry/Visits' element={<Visits />} />
        <Route path='publicHealthCareRegistry/Examinations' element={<Examinations />} />
        <Route path='publicHealthCareRegistry/Investigations' element={<Investigations />} /> */}
        <Route path='growthMonitoring' element={<GrowthMonitoring />} />
        <Route path='milestones' element={<Milestones />} />
        <Route path='vitaminADeworming' element={<ADeworming />} />
        <Route path='immunizationRegistry' element={<ImmunizationRegistry />} />     
        <Route path='immunizationRegistry/enrollments' element={<Enrollments />} />   
        {/* <Route path='settings' element={<Settings />} /> */}
        <Route path='*' element={<Oops />} />
      </Routes>
    </div>
  );
}

function RequireAuth({ children }) {
  let location = useLocation();
  const token = getCookie();
  if (token) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default App;
