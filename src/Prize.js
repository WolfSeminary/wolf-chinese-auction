import React from "react";
import {
  Checkbox,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

export default function PrizeItem(props) {
  const onSelectedPrizeChange = (e) => {
    let isChecked = e.target.checked;
    props.changeSelectedPrize(props.ID);
    const valueToAdd = isChecked ? 1 : -1;
    props.setNumOfSelectedPrizes(props.numOfSelectedPrizes + valueToAdd);
  };
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={props.Image} alt="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.Name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.Description}
        </Typography>
        <Typography>{props.Price}</Typography>
      </CardContent>
      <Checkbox onChange={onSelectedPrizeChange} />
    </Card>
  );
}
