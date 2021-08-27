import React, { useState, useEffect } from 'react';
import { format, addMilliseconds } from 'date-fns';

function StopwatchHook () {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(false);

  const startStopClickHandler = () => {
    setIsRunning(!isRunning);
  };
  const resetHandler = () => {
    setTime(new Date(0, 0, 0, 0, 0, 0));
  };

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime(addMilliseconds(time, 1000));
      }, 1000);
      return () => {
        clearInterval(id);
      };
    }
  });

  return (
    <div>
      <h2>{format(time, 'HH:mm:ss')}</h2>
      <button onClick={startStopClickHandler}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default StopwatchHook;
