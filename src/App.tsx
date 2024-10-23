import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Paper from '@mui/material/Paper';
import {ThemeProvider} from '@mui/material/styles';
import {useAtom} from 'jotai';

import {initGA, logPageView} from './analytics/ga4';
import Navigation from './components/Navigation';
import {Theme} from './constants/constants';
import Home from './pages/Home';
import SearchStock from './pages/SearchStock';
import {themeAtom} from './state/store';
import {darkTheme, lightTheme} from './theme/createTheme';

import './App.css';

const App = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme === Theme.light ? lightTheme : darkTheme}>
        <BrowserRouter>
          <Paper>
            <Navigation />

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/search-stock' element={<SearchStock />} />
            </Routes>
          </Paper>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
