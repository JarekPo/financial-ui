import React from 'react';

import Paper from '@mui/material/Paper';
import {DataGrid} from '@mui/x-data-grid';
import {useAtom} from 'jotai';

import {stocksTablecolumns} from '../constants/constants';
import {stocksDataAtom} from '../state/store';

const StocksTable = () => {
  const [stocksData, setStocksData] = useAtom(stocksDataAtom);
  return (
    <Paper sx={{width: '100%', height: '100%'}}>
      <DataGrid
        style={{height: '80vh'}}
        rows={stocksData}
        columns={stocksTablecolumns}
        initialState={{
          pagination: {
            paginationModel: {page: 0, pageSize: 12},
          },
        }}
        pageSizeOptions={[12, 24, 50, 100]}
        disableRowSelectionOnClick
      />
    </Paper>
  );
};

export default StocksTable;
