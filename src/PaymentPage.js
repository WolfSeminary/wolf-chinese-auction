import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ThankYouModal from './ThankYouModal'

export default function PaymentPage() {
  const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false)
  const navigate = useNavigate();
  const navigateToPrizes = () => {
    navigate(`/prize_page`)
  }

  onSubmit = () => {
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
      {shouldShowThankYouModal && <ThankYouModal />}
    </>
  );
}
