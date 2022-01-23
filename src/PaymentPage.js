import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

export default function ButtonBackToGifts() {
  let navigate = useNavigate();
  return (
    <Button variant="contained" disableElevation sx={{
      position: 'fixed',
      m: 0,
      top: 10,
      right: 10
    }}
      onClick={() =>
        navigate(`/prize_page`)}
    >
      <ArrowBackIcon />בחזרה לבחירת המתנות
    </Button>
  );
}
