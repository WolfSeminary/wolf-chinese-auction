import React, { useState } from "react";
import ThankYouModal from "./ThankYouModal";
import TitleAppBar from "./TitleAppBar";
import ButtonBackToGifts from "./ButtonBackToGifts";
import PrizesTable from "./PrizesTable";
import TotalPrice from "./TotalPrice";
import SubmitButton from "./SubmitButton";

export default function PaymentPage(props) {
  const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false);
  const onCloseModal = (FName, LName) => {
    setShouldShowThankYouModal(false);
    localStorage.setItem("UserFirstName", FName);
    localStorage.setItem("UserLastName", LName);
    localStorage.setItem(
      "PrizesList",
      props.prizes.filter((p) => p.isSelected).map((p) => p.Name)
    );
  };
  return (
    <>
      <TitleAppBar />
      <ButtonBackToGifts />
      <PrizesTable prizes={props.prizes} />
      <TotalPrice />
      {shouldShowThankYouModal && <ThankYouModal onCloseModal={onCloseModal} />}
      <SubmitButton />
    </>
  );
}
