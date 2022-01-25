import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function PrizeItem(props) {
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
    </Card>
  );
}
