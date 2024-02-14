import React from 'react';

import {ThemeProvider} from '@mui/material/styles';
import {useAtom} from 'jotai';

import Home from './pages/Home';
import {themeAtom} from './state/store';
import {darkTheme, lightTheme} from './theme/createTheme';

import './App.css';

const App = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
