import React from 'react';
import Navbar from '../components/Navbar'; 
import AddReportButton from '../components/AddReportButton';
import { useNavigate } from 'react-router-dom'; 

const MainLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleAddReport = () => {
    navigate('/report/step1'); 
  };

  return (
    <div className="mx-auto max-w-lg min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow pb-20 p-4"> 
        {children}
      </main>
      <AddReportButton onClick={handleAddReport} />
      <Navbar />

    </div>
  );
};

export default MainLayout;