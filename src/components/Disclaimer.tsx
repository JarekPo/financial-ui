import React from 'react';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Disclaimer = () => {
  return (
    <>
      <Paper sx={{margin: 1, padding: 1, textAlign: 'center'}}>
        <Typography variant='caption'>
          <InfoOutlinedIcon fontSize='inherit' sx={{marginRight: 0.5}} />
          This instance of the application is for demonstration purposes. Created by{' '}
          <Link href='https://github.com/JarekPo' underline='hover' target='_blank'>
            JarekPo
          </Link>
          .
        </Typography>
      </Paper>
    </>
  );
};

export default Disclaimer;
