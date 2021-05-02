import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/css/style.css';
import AdminRoute from './routes/AdminRoute';
import AppRoute from './routes/AppRoute';

const App = () => {
  return (
    <Router>
      <AppRoute/>
      <AdminRoute/>
    </Router>
  );
};

export default App;