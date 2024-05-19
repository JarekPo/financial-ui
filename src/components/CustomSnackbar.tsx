import React, {useState} from 'react';

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export interface CustomSnackbarProps {
  open?: boolean;
  severity?: 'error' | 'info' | 'success' | 'warning';
  message?: string;
}
const CustomSnackbar = ({open, severity, message}: CustomSnackbarProps) => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(open);

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };
  return (
    <>
      <Snackbar open={isSnackbarOpen} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={severity} variant='filled' sx={{width: '100%'}}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CustomSnackbar;
