import React from 'react';
import './App.less';
import { BrowserRouter as Router } from 'react-router-dom';

// import MainLayout from './pages/layout/layout';
import Login from './pages/login/login';

const App: React.FC = () => {
  // const storage = localStorage.getItem('login');
  return (
    <Router>
      <Login />
    </Router>
  );
};

export default App;
