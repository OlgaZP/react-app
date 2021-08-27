import React, { useState, useEffect } from 'react';

function ClickerHook () {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleClick);
  });

  return <div>{clickCount}</div>;
}

export default ClickerHook;
