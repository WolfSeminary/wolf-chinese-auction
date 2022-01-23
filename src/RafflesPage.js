import React from 'react';
import Winner from './Winner';
//import RafflesTable from './RafflesTable';
import TitleAppBar from './TitleAppBar';

export default function RafflesPage() {
    return (
        <>
            <TitleAppBar />
            {/* not exist:<RafflesTable/> */}
            <Winner />
        </>
    );
}
