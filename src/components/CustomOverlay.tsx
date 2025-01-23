import React from 'react';

import {GridOverlay} from '@mui/x-data-grid';

const CustomOverlay = () => (
  <GridOverlay>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <p>No data to display. Start new search.</p>
    </div>
  </GridOverlay>
);

export default CustomOverlay;
