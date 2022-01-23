import ContinueToPayment from './ContinueToPayment';
import TitleAppBar from './TitleAppBar';
import Prizes from './Prizes';
import NoticeModal from './NoticeModal';

export default function PrizesPage() {
    const [shouldShowNoticeModal, setShouldShowNoticeModal] = useState(false);
    function onCloseModal() {
        setShouldShowNoticeModal(false)
    }
    return (
        <>
            <TitleAppBar />
            <Prizes />
            <ContinueToPayment />
            {shouldShowNoticeModal && <NoticeModal onClose={onCloseModal} />}
        </>
    );
}
