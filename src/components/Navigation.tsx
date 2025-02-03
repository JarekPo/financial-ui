import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useAtom} from 'jotai';

import logo from '../assets/logo.png';
import logoDark from '../assets/logo-dark.jpg';
import {Theme} from '../constants/constants';
import {themeAtom} from '../state/store';
import ThemeToggler from './ThemeToggler';

const Navigation = () => {
  const [selectedTab, setSelectedTab] = useState<string>('home');
  const [theme, setTheme] = useAtom(themeAtom);
  const pageTheme = useTheme();
  const isSmallScreen = useMediaQuery(pageTheme.breakpoints.down('sm'));

  return (
    <Paper sx={{margin: 1}}>
      <Grid container sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Link to='/'>
            <img
              src={theme == Theme.light ? logo : logoDark}
              alt='logo'
              style={{width: '70px', marginRight: 10, padding: 5}}
              onClick={() => setSelectedTab('home')}
            />
          </Link>
          <Link to='/'>
            <Button
              startIcon={<HomeIcon />}
              size={isSmallScreen ? 'small' : 'large'}
              sx={selectedTab === 'home' ? {border: '1px solid #bdbdbd'} : {}}
              onClick={() => setSelectedTab('home')}
            >
              Home
            </Button>
          </Link>
          <Link to='/search-stock' state={{isActive: true}}>
            <Button
              startIcon={<SearchIcon />}
              size={isSmallScreen ? 'small' : 'large'}
              sx={selectedTab === 'search-stock' ? {border: '1px solid #bdbdbd'} : {}}
              onClick={() => setSelectedTab('search-stock')}
            >
              Search Stock
            </Button>
          </Link>
        </Stack>
        <Grid item sx={{display: 'flex', alignItems: 'center', margin: 1}}>
          <ThemeToggler />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Navigation;
