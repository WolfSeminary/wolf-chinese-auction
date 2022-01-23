import ContinueToPayment from './ContinueToPayment';
import TitleAppBar from './TitleAppBar';
import Prizes from './Prizes';
import NoticeModal from './NoticeModal';

export default function PrizesPage() {
    const [shouldShowNoticeModal, setShouldShowNoticeModal] = useState(false);
    return (
        <>
            <AppBar />
            <Prizes />
            <ContinueToPayment />
            {shouldShowNoticeModal && <NoticeModal />} 
        </>
    );
}