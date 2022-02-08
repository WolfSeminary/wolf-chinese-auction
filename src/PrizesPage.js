import ContinueToPayment from "./ContinueToPayment";
import TitleAppBar from "./TitleAppBar";
import Prizes from "./Prizes";
import NoticeModal from "./NoticeModal";
import { useState } from "react";

export default function PrizesPage({ prizes }) {
  const [shouldShowNoticeModal, setShouldShowNoticeModal] = useState(false);
  function onCloseModal() {
    setShouldShowNoticeModal(false);
  }
  return (
    <>
      <TitleAppBar />
      <Prizes prizes={prizes} />
      <ContinueToPayment />
      <NoticeModal
        shouldShowNoticeModal={shouldShowNoticeModal}
        onClose={onCloseModal}
      />
    </>
  );
}
