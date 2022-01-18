import ContinueToPayment from './ContinueToPayment';
import TitleAppBar from './TitleAppBar';
import Prizes from './Prizes';
import NoticeModal from './NoticeModal';

export default function PrizesPage() {
    return (
        <>
            <TitleAppBar/>
            <Prizes/>
            <ContinueToPayment/>
            <NoticeModal/>
        </>
    );
}