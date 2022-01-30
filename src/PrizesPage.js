import ContinueToPayment from './ContinueToPayment';
import TitleAppBar from './TitleAppBar';
import Prizes from './Prizes';
import NoticeModal from './NoticeModal';
import { useState } from 'react';

export default function PrizesPage(props) {
    const [shouldShowNoticeModal, setShouldShowNoticeModal] = useState(false);
    const [numOfSelectedPrizes, setNumOfSelectedPrizes] = useState(0)
    const onCloseModal = () => {
        setShouldShowNoticeModal(false)
    }
    return (
        <>
            <TitleAppBar />
            <Prizes
                prizes={props.prizes}
                numOfSelectedPrizes={numOfSelectedPrizes} />
            <ContinueToPayment />
            {shouldShowNoticeModal && <NoticeModal onClose={onCloseModal} />}
        </>
    );
}
