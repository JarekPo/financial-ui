import React, {useState} from 'react';

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

interface CustomSnackbar {
  open: boolean;
  severity: 'error' | 'info' | 'success' | 'warning';
  message: string;
}
const CustomSnackbar = ({open, severity, message}: CustomSnackbar) => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };
  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={severity} variant='filled' sx={{width: '100%'}}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CustomSnackbar;
