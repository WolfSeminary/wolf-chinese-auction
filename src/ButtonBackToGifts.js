import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export default function ButtonBackToGifts() {
  let navigate = useNavigate();
  let navigateToPrizes = () => {
    navigate(`/Prizes`)
  }
  return (
    <>
      <Button onClick={navigateToPrizes} variant="contained" disableElevation sx={{
        position: 'fixed',
        m: 0,
        top: 10,
        right: 10
      }} >
        <ArrowBackIcon />בחזרה לבחירת המתנות-Back to Prizes
      </Button>
    </>
  );
}
