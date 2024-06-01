import React from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';

const Home = () => {
  return (
    <div>
        <h1>Welcome</h1>
        <p>Select Your Timer Here :)</p>
        <Link to="/countdowntimer" ><button>Countdown-Timer</button></Link>
        <Link to="/stopwatch"><button>Stop-Watch</button></Link>
    </div>
  );
};

export default Home;
