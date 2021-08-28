import { createContext } from 'react';
import CONSTANTS from '../constants';

export const UserContext = createContext();
export const ThemeContext = createContext(CONSTANTS.THEMES.LIGHT);
