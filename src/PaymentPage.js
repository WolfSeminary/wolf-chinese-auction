import React, { useState} from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ThankYouModal from './ThankYouModal'

export default function PaymentPage(props) {
  const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false)
  const onCloseModal = (FName, LName) => {
    setShouldShowThankYouModal(false);
    localStorage.setItem("UserFirstName", FName);
    localStorage.setItem("UserLastName", LName);
    localStorage.setItem("PrizesList", props.prizes.filter((p) => { if (p.isSelected) return p.Name; }))
  }
  return (
    <>
      <TitleAppBar />
      <ButtonBackToGifts />
      <PricesTable />
      <TotalPrice />
      {shouldShowThankYouModal && <ThankYouModal onCloseModal={onCloseModal}/>}
      <SubmitButton />
    </>
  );
}
