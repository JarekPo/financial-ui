import React, {MouseEvent} from 'react';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {useAtom} from 'jotai';

import {Theme} from '../constants/constants';
import {themeAtom} from '../state/store';

export const ThemeToggler = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  const handleThemeSelect = (e: MouseEvent<HTMLElement>, selectedTheme: string) => {
    setTheme(selectedTheme as Theme);
    localStorage.setItem('theme', selectedTheme);
  };

  return (
    <>
      <ToggleButtonGroup size='small' value={theme} exclusive aria-label='theme change buttons'>
        <ToggleButton value={Theme.light} onClick={handleThemeSelect} aria-label='light theme'>
          <LightModeIcon fontSize='small' />
        </ToggleButton>
        <ToggleButton value={Theme.dark} onClick={handleThemeSelect} aria-label='dark theme'>
          <DarkModeIcon fontSize='small' />
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default ThemeToggler;
