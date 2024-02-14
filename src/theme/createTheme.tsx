import {createTheme} from '@mui/material/styles';

import {Theme} from '../constants/constants';

export const darkTheme = createTheme({
  palette: {
    mode: Theme.dark,
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: Theme.light,
  },
});
