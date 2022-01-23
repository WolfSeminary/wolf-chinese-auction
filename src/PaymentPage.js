import React, { useState } from 'react';
<<<<<<< HEAD
import { Button } from '@mui/material';
=======
import Button from '@mui/material/Button';
>>>>>>> origin/master
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ThankYouModal from './ThankYouModal'

export default function ButtonBackToGifts() {
  const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false)
<<<<<<< HEAD
  function onCloseModal() {
    setShouldShowThankYouModal(false)
  }
  return (
    <>
      <Button variant="contained" disableElevation sx={{
=======
  onSubmit=()=>{
    setShouldShowThankYouModal(true);
  }
  return (
    <>
      <Button onClick="onSubmit" variant="contained" disableElevation sx={{
>>>>>>> origin/master
        position: 'fixed',
        m: 0,
        top: 10,
        right: 10
      }} >
        <ArrowBackIcon />בחזרה לבחירת המתנות
      </Button>
<<<<<<< HEAD
      {shouldShowThankYouModal && <ThankYouModal onClose={onCloseModal} />}
      {/* <Modal onClose={onCloseModal}/> */}
=======
      {shouldShowThankYouModal && <ThankYouModal />}
>>>>>>> origin/master
    </>
  );
}
