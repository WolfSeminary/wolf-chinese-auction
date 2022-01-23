import ContinueToPayment from './ContinueToPayment'

export default function PrizesPage() {
    const [shouldShowNoticeModal, setShouldShowNoticeModal] = useState(false);
    return (
        <>
            <AppBar />
            <Prizes />
            <ContinueToPayment />
            {shouldShowThankYouModal && <NoticeModal />} 
        </>
    );
}