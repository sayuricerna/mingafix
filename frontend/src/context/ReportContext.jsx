import React, { createContext, useState, useContext } from 'react';

const ReportContext = createContext(null);

export const ReportProvider = ({ children }) => {
  const [reportData, setReportData] = useState({
    photos: [],
    blurActive: false,
    location: null,
    category: '',
    description: '',
  });

  const updateReportData = (newData) => {
    setReportData(prevData => ({
      ...prevData,
      ...newData
    }));
  };

  const clearReport = () => {
    setReportData({
      photos: [],
      blurActive: false,
      location: null,
      category: '',
      description: '',
    });
  };

  const contextValue = {
    reportData,
    updateReportData,
    clearReport,
  };

  return (
    <ReportContext.Provider value={contextValue}>
      {children}
    </ReportContext.Provider>
  );
};

export const useReport = () => {
  return useContext(ReportContext);
};