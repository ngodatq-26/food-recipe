import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import AppRoutes from './AppRoutes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
       <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
