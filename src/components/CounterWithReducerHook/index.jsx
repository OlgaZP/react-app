import React, { useReducer } from 'react';

const reducer = (state, action) => {
  const { type } = action;
  const { count, step } = state;
  switch (type) {
    case 'increment':
      return { ...state, count: count + step };
    case 'decrement':
      return { ...state, count: count - step };
    case 'changeStep':
      const { stepValue } = action;
      return { ...state, step: stepValue };
  }
  return state;
};

function CounterWithReducerHook () {
  const [{ count, step }, dispatch] = useReducer(reducer, {
    count: 0,
    step: 1,
  });

  const increment = () => {
    dispatch({ type: 'increment' });
  };

  const decrement = () => {
    dispatch({ type: 'decrement' });
  };

  const changeStep = ({ target: { value } }) => {
    dispatch({ type: 'changeStep', stepValue: Number(value) });
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type='number' value={step} onChange={changeStep} />
    </div>
  );
}

export default CounterWithReducerHook;
