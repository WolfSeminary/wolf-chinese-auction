import ContinueToPayment from './ContinueToPayment';
import TitleAppBar from './TitleAppBar';
import Prizes from './Prizes';
import NoticeModal from './NoticeModal';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

export default function PrizesPage() {
    function onCloseModal() {
        shouldShowNoticeModal = useState(false)
    }
    return (
        <>
            <TitleAppBar />
            <Prizes />
            <ContinueToPayment />
            <NoticeModal />
            <Modal onClose={onCloseModal} />
        </>
    );
}