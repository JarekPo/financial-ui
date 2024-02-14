import React, {MouseEvent} from 'react';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {useAtom} from 'jotai';

import {Theme} from '../constants/constants';
import {themeAtom} from '../state/store';

export const ThemeToggler = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  const handleThemeSelect = (e: MouseEvent<HTMLElement>, selectedType: string) => {
    setTheme(selectedType);
  };

  return (
    <>
      <Grid item>
        <Typography variant='body1'>Theme</Typography>
      </Grid>
      <Grid item>
        <ToggleButtonGroup value={theme} exclusive aria-label='theme change buttons'>
          <ToggleButton value={Theme.light} onClick={handleThemeSelect} aria-label='light theme'>
            <LightModeIcon />
          </ToggleButton>
          <ToggleButton value={Theme.dark} onClick={handleThemeSelect} aria-label='dark theme'>
            <DarkModeIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </>
  );
};

export default ThemeToggler;
