import React, { useState } from 'react';
import { Button } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ButtonBackToGifts from './ButtonBackToGifts';
import ThankYouModal from './ThankYouModal'
import TitleAppBar from './TitleAppBar';
import PricesTable from './PricesTable ';
import TotalPrice from './TotalPrice';

export default function PaymentPage() {
  const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false)
  function onCloseModal() {
    setShouldShowThankYouModal(false)
  }
  onSubmit=()=>{
    setShouldShowThankYouModal(true);
  }
  return (
    <>
      <Button onClick="onSubmit" variant="contained" disableElevation sx={{
        position: 'fixed',
        m: 0,
        top: 10,
        right: 10
      }} >
        <ArrowBackIcon />בחזרה לבחירת המתנות
      </Button>
      {shouldShowThankYouModal && <ThankYouModal onClose={onCloseModal} />}
      <TitleAppBar />
      <ButtonBackToGifts />
      <PricesTable/>
      <TotalPrice/>
      
    </>
  );
}
