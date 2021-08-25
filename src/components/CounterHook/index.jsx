import React, { useState } from 'react';

function CounterHook () {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const incrementHandler = () => {
    setCounter(counter + step);
  };

  const decrementHandler = () => {
    setCounter(counter - step);
  };

  const changeStepHandler = e => {
    setStep(Number(e.target.value));
  };

  return (
    <div>
      <div>{counter}</div>
      <input type='number' value={step} onChange={changeStepHandler} />
      <br />
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
    </div>
  );
}

export default CounterHook;
