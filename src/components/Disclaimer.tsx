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
          This application is for demonstration purposes only. Created by{' '}
          <Link
            href='https://www.linkedin.com/in/jarek-polowy/'
            underline='hover'
            target='_blank'
            rel='noopener noreferrer'
          >
            Jarek Polowy
          </Link>
          . Data provided by{' '}
          <Link
            color='textPrimary'
            href='https://financialmodelingprep.com/developer/docs/'
            underline='hover'
            target='_blank'
            rel='noopener noreferrer'
          >
            Financial Modeling Prep
          </Link>
          .
        </Typography>
      </Paper>
    </>
  );
};

export default Disclaimer;
