import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ButtonBackToGifts() {
  return (
   <Button variant="contained" disableElevation sx={{
      position: 'fixed',
      m: 0,
      top: 10,
      right: 10
    }} >
      <ArrowBackIcon />בחזרה לבחירת המתנות
    </Button>
  );
}

