import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ButtonBackToGifts from './ButtonBackToGifts';
import ThankYouModal from './ThankYouModal'
import TitleAppBar from './TitleAppBar';
import PricesTable from './PricesTable ';
import TotalPrice from './TotalPrice';
import SubmitButton from './SubmitButton';


export default function PaymentPage() {
  const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false)
  function onCloseModal() {
    setShouldShowThankYouModal(false)
  }

  // const onSubmit = () => {
  //   setShouldShowThankYouModal(true);
  // }
  return (
    <>
      <TitleAppBar />
      <ButtonBackToGifts />
      <PricesTable />
      <TotalPrice />
      {shouldShowThankYouModal && <ThankYouModal onClose={onCloseModal} />}
      <SubmitButton />

    </>
  );
}
