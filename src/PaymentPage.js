import React, { useState} from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ThankYouModal from './ThankYouModal'
import { useNavigate } from 'react-router-dom';

export default function PaymentPage(prizes) {
  const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false)
  function onCloseModal() {
    setShouldShowThankYouModal(false)
  }
  let navigate = useNavigate();
  let navigateToPrizes = () => {
    navigate(`/prize_page`)
  }
  const onSubmit = () => {
    setShouldShowThankYouModal(true);
  }
  return (
    <>
      <Button onClick={navigateToPrizes} variant="contained" disableElevation sx={{
        position: 'fixed',
        m: 0,
        top: 10,
        right: 10
      }} >
        <ArrowBackIcon />בחזרה לבחירת המתנות
      </Button>
      {shouldShowThankYouModal && <ThankYouModal onClose={onCloseModal} />}
    </>
  );
}
