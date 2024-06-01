import React, { useState, useEffect } from 'react';
import './Stylingall.css'


const CountdownTimer = () => {
  const [targetDate, setTargetDate] = useState('');
  const [timeLeft, setTimeLeft] = useState({});
  const [isCounting, setIsCounting] = useState(false);

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    if (isCounting) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isCounting, timeLeft]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsCounting(true);
    setTimeLeft(calculateTimeLeft());
  };

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="countdown">
      <form onSubmit={handleSubmit}>
        <label>
          <p className='time-display'>Target Date and Time:</p>
          <input
            type="datetime-local"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            required
          />
        </label>
        <button type="submit">Start Countdown</button>
      </form>
      <div>
        {isCounting ? (timerComponents.length ? timerComponents : <span>Time's up!</span>) : null}
      </div>
    </div>
  );
};

export default CountdownTimer;
