import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ThankYouModal from './ThankYouModal'

export default function ButtonBackToGifts() {
  const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false)
  onSubmit=()=>{
    setShouldShowThankYouModal(true);
  }
  return (
    <>
      <Button onClick="onSubmit()" variant="contained" disableElevation sx={{
        position: 'fixed',
        m: 0,
        top: 10,
        right: 10
      }} >
        <ArrowBackIcon />בחזרה לבחירת המתנות
      </Button>
      {shouldShowThankYouModal && <ThankYouModal />}
    </>
  );
}
