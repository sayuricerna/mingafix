import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReportProvider } from './context/ReportContext';

import { AuthProvider } from './context/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> 
      <AuthProvider>
        <ReportProvider>
          <App/>
        </ReportProvider>   
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();