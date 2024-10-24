import React from 'react';

import {CardActionArea} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useAtom} from 'jotai';

import {historicalDataAtom, selectedProductAtom} from '../state/store';

const ProductSummaryCard = () => {
  const [historicalData, setHistoricalData] = useAtom(historicalDataAtom);
  const [selectedProduct, setSelectedProduct] = useAtom(selectedProductAtom);

  return (
    <Card sx={{minWidth: 300, marginTop: 2, marginLeft: 1}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            {selectedProduct.label}
          </Typography>
          <Typography gutterBottom variant='body2' color='text.secondary' component='div'>
            {`Currency: ${selectedProduct.currency}`} <br />
            {`Stock Exchange: ${selectedProduct.stockExchange}`} <br />
            {`Ticker: ${selectedProduct.id}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ProductSummaryCard;
