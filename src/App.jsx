import React from 'react';
import Stopwatch from './Stopwatch';
import CountdownTimer from './CountdownTimer';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import './Stylingall.css'

function App() {
  const targetDate = '2024-6-20T00:00:00';
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/countdowntimer" element={<CountdownTimer targetDate={targetDate}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
