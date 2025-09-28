import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import './App.css';
import NewReportStep1 from './pages/NewReportStep1';
import NewReportStep2 from './pages/NewReportStep2';
import NewReportStep3 from './pages/NewReportPage3';
import SuccessNotificationPage from './pages/SuccessNotificationPage';
import MapPage from './pages/MapPage';
import NotFoundPage from './pages/NotFoundPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} /> 
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<NotFoundPage/>} />
      <Route path="/register" element={<div>Register Page (Por implementar)</div>} />
      <Route path="/report/step1" element={<NewReportStep1/>} />
      <Route path="/report/step2" element={<NewReportStep2/>} />
      <Route path="/report/step3" element={<NewReportStep3/>} />
      <Route path="/report/success" element={<SuccessNotificationPage/>} />
      <Route path="/map" element={<MapPage position={[40.7128, -74.006]} zoom={12} />} />
    </Routes>
  );
}

export default App;
