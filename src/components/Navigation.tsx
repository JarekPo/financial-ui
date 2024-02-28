import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {useAtom} from 'jotai';

import logo from '../assets/logo.png';
import logoDark from '../assets/logo-dark.jpg';
import {Theme} from '../constants/constants';
import {themeAtom} from '../state/store';
import ThemeToggler from './ThemeToggler';

const Navigation = () => {
  const [value, setValue] = useState<number>(1);
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <Paper sx={{margin: 1}}>
      <Grid container sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Link to='/'>
            <img
              src={theme == Theme.light ? logo : logoDark}
              alt='logo'
              style={{width: '70px', marginRight: 10, padding: 5}}
            />
          </Link>
          <Link to='/'>
            <Button startIcon={<HomeIcon />} size='large' sx={{padding: 2.5}}>
              Home
            </Button>
          </Link>
          <Link to='/search-stock'>
            <Button startIcon={<SearchIcon />} size='large' sx={{padding: 2.5}}>
              Serch Stock
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
