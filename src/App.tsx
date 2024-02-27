import React from 'react';

import Paper from '@mui/material/Paper';
import {ThemeProvider} from '@mui/material/styles';
import {useAtom} from 'jotai';

import Navigation from './components/Navigation';
import {Theme} from './constants/constants';
import Home from './pages/Home';
import SearchStock from './pages/SearchStock';
import {themeAtom} from './state/store';
import {darkTheme, lightTheme} from './theme/createTheme';

import './App.css';

const App = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  return (
    <>
      <ThemeProvider theme={theme === Theme.light ? lightTheme : darkTheme}>
        <Paper>
          <Navigation />
          <Home />
          <SearchStock />
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default App;
