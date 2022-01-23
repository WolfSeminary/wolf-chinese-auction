import React, { useState } from 'react';
import ButtonBackToGifts from './ButtonBackToGifts';
import ThankYouModal from './ThankYouModal'
import TitleAppBar from './TitleAppBar';
import PricesTable from './PricesTable ';
import TotalPrice from './TotalPrice';
import SubmitButton from './SubmitButton';

export default function PaymentPage() {
  const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false)

  return (
    <>
      <TitleAppBar />
      <ButtonBackToGifts />
      <PricesTable/>
      <TotalPrice/>
      {shouldShowThankYouModal && <ThankYouModal />}
      <SubmitButton/>
    </>
  );
}
