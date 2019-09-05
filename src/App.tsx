import React from 'react';
import './App.less';
import { BrowserRouter as Router } from 'react-router-dom';

import MainLayout from './pages/layout/layout';

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

export default App;
