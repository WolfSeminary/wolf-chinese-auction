import React, { useState } from 'react';
import ButtonBackToGifts from './ButtonBackToGifts';
import ThankYouModal from './ThankYouModal'
import TitleAppBar from './TitleAppBar';
import PricesTable from './PricesTable ';
import TotalPrice from './TotalPrice';
import SubmitButton from './SubmitButton';

export default function PaymentPage() {
  const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false)
  const onCloseModal = (prizes, Fname, LName) => {
    localStorage.setItem("UserFirstName", Fname);
    localStorage.setItem("UserLastName", LName);
    localStorage.setItem("PrizesList", prizes.filter((p) => { if (p.selected) return p.Name; }))
  }
  return (
    <>
      <TitleAppBar />
      <ButtonBackToGifts />
      <PricesTable />
      <TotalPrice />
      {shouldShowThankYouModal && <ThankYouModal />}
      <SubmitButton />
    </>
  );
}
