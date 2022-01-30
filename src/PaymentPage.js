import React, { useState} from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ThankYouModal from './ThankYouModal'
import TitleAppBar from './TitleAppBar';
import ButtonBackToGifts from './ButtonBackToGifts';
import TotalPrice from './TotalPrice';
import PricesTable from './PricesTable';
import SubmitButton from './SubmitButton';
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
      <PricesTable prizes = {props.prizes}/>
      <TotalPrice />
      {shouldShowThankYouModal && <ThankYouModal onCloseModal={onCloseModal}/>}
      <SubmitButton setShouldShow = {setShouldShowThankYouModal}/>
    </>
  );
}
