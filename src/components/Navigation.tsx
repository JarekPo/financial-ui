import React, {SyntheticEvent, useState} from 'react';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import {useAtom} from 'jotai';

import logo from '../assets/logo.png';
import logoDark from '../assets/logo-dark.jpg';
import {Theme} from '../constants/constants';
import {themeAtom} from '../state/store';

const Navigation = () => {
  const [value, setValue] = useState('home');
  const [theme, setTheme] = useAtom(themeAtom);

  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Paper sx={{margin: 1}}>
      <Tabs value={value} onChange={handleTabChange} aria-label='navigation tabs'>
        <img src={theme == Theme.light ? logo : logoDark} alt='logo' style={{width: '90px', marginRight: 15}} />
        <Tab icon={<HomeIcon />} iconPosition='top' label='home' value={'home'} />
        <Tab icon={<SearchIcon />} iconPosition='top' label='serch stock' value={'serch-stock'} />
      </Tabs>
    </Paper>
  );
};

export default Navigation;
