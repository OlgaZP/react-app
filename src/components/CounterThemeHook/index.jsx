import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import CONSTANTS from '../../constants';
import { ThemeContext } from '../../contexts';

const calcValue = v => {
  let i = 1;
  for (let j = 1; j <= 400000000; j++) {
    i = j * i;
  }
  return v ** 3;
};

function CounterThemeHook () {
  const [theme, setTheme] = useContext(ThemeContext);
  const [count, setCount] = useState(0);

  // not memoised
  //   const logCount = () => {
  //     console.log('count= :>> ', count);
  //   };

  const logCount = useCallback(() => {
    console.log('count= :>> ', count);
  }, [count]);

  useEffect(() => {
    console.log('functions has been created :>> ');
  }, [count]);

  //   const themeSwitcher = () => {
  //     setTheme(
  //       theme === CONSTANTS.THEMES.DARK
  //         ? CONSTANTS.THEMES.LIGHT
  //         : CONSTANTS.THEMES.DARK
  //     );
  //   };
  //once
  const themeSwitcher = useCallback(() => {
    setTheme(theme =>
      theme === CONSTANTS.THEMES.DARK
        ? CONSTANTS.THEMES.LIGHT
        : CONSTANTS.THEMES.DARK
    );
  }, []);

  const styleMap = {
    [CONSTANTS.THEMES.LIGHT]: {
      color: 'darkblue',
      backgroundColor: 'white',
      height: '20vh',
    },
    [CONSTANTS.THEMES.DARK]: {
      color: 'white',
      backgroundColor: 'darkblue',
      height: '20vh',
    },
  };

  //   const changeCountHandler = ({ target: { value } }) => {
  //     setCount(Number(value));
  //   };
  const changeCountHandler = useCallback(({ target: { value } }) => {
    setCount(Number(value));
  }, []);

  //   const calculatedValue = calcValue(count);
  const calculatedValue = useMemo(() => calcValue(count), [count]);

  return (
    <div style={styleMap[theme]}>
      <h3>Switch Theme Example</h3>
      <button onClick={themeSwitcher}>Switch theme</button>
      <input type='number' value={count} onChange={changeCountHandler} />
      <button onClick={logCount}>LogCount</button>
      <div>{calculatedValue}</div>
    </div>
  );
}

export default CounterThemeHook;
