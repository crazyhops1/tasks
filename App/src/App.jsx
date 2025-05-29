import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Task1 from './task1/Task1';
import './App.css'
import Task2 from './task2/Task2';
import Navbar from './nav/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Task1 />} />
        <Route path='/task2' element={<Task2 />} />

      </Routes>

    </Router>
  )
}

export default App