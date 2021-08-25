import React, { useState } from 'react';

function MouseClickerHook () {
  const [counter, setCounter] = useState(0);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const clickHandler = () => {
    setCounter(counter + 1);
  };

  const mouseMoveHandler = e => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onClick={clickHandler}
      onMouseMove={mouseMoveHandler}
      style={{
        height: '50vh',
        border: '2px solid red',
        bocSixing: 'border-box',
      }}
    >
      Clicks: {counter}
      <br />
      Mouse coords: {coords.x} {coords.y}
    </div>
  );
}

export default MouseClickerHook;
