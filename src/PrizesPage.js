import ContinueToPayment from "./ContinueToPayment";
import TitleAppBar from "./TitleAppBar";
import Prizes from "./Prizes";
import NoticeModal from "./NoticeModal";
import { useState } from "react";

export default function PrizesPage({ prizes }) {
  const [shouldShowNoticeModal, setShouldShowNoticeModal] = useState(false);
  const [numOfSelectedPrizes, setNumOfSelectedPrizes] = useState(0);

  function onCloseModal() {
    setShouldShowNoticeModal(false);
  }

  return (
    <>
      <TitleAppBar numOfSelectedPrizes={numOfSelectedPrizes} />
      <Prizes
        prizes={prizes}
        numOfSelectedPrizes={numOfSelectedPrizes}
        setNumOfSelectedPrizes={setNumOfSelectedPrizes}
        setShouldShowNoticeModal={setShouldShowNoticeModal}
      />
      <ContinueToPayment />
      {shouldShowNoticeModal && (
        <NoticeModal
          shouldShowNoticeModal={shouldShowNoticeModal}
          onClose={onCloseModal}
        />
      )}
    </>
  );
}
