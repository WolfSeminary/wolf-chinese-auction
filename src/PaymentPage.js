import React, { useState } from 'react';
import ButtonBackToGifts from './ButtonBackToGifts';
import ThankYouModal from './ThankYouModal'
import TitleAppBar from './TitleAppBar';
import PricesTable from './PricesTable ';
import TotalPrice from './TotalPrice';
import SubmitButton from './SubmitButton';

export default function PaymentPage(props) {
  const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false)
  const onCloseModal = (FName, LName) => {
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
