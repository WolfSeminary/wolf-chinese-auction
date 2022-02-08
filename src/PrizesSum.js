
import React from 'react';
import Badge from '@mui/material/Badge';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const PrizesSum = () => {
    const [numOfSelectedPrizes, setNumOfSelectedPrizes] = React.useState(0);
    const onSelectedPrizeChange = (e) => {
        if (e.value)
            setNumOfSelectedPrizes(numOfSelectedPrizes + 1);
        if (!e.value)
            setNumOfSelectedPrizes(numOfSelectedPrizes - 1);
    }
    return (<Badge badgeContent={0} color="primary">
        <CardGiftcardIcon color="action" />
    </Badge>
    )
}
export default PrizesSum