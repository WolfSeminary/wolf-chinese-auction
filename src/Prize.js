import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Checkbox } from '@mui/material';
import PrizesSum from './PrizesSum';

export default function PrizeItem(props) {
   const [selectedCategory, setSelectedCategory] = useState(props.isSelected);
    const onSelectedPrizeChange = (e) => {
        setSelectedCategory(e.target.checked)
        if (e.value)
        setNumOfSelectedPrizes(numOfSelectedPrizes + 1);
        if (!e.value)
        setNumOfSelectedPrizes(numOfSelectedPrizes - 1);
    }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.Image}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.Name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.Description}
        </Typography>
        <Typography>
          {props.Price}
        </Typography>
      </CardContent>
      <Checkbox onChange={onSelectedPrizeChange} />
    </Card>
  );
}
