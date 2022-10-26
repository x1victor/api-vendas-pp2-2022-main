import React from 'react';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {DashBoard} from './pages/DashBoard'
import {Repo} from './pages/Repo'
import {About} from './pages/About'
import { Header } from './pages/Header/index';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<DashBoard/>} />
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/repositories" element={<Repo/>} /> 
        <Route path="/about" element={<About/>} />  
      </Routes>
    </Router>

  );
}

export default App;
