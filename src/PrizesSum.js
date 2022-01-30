
import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const PrizesSum = (props) => {
   
    return (<Badge badgeContent={props.numOfSelectedPrizes} color="primary">
        <CardGiftcardIcon color="action" />
    </Badge>
    )


}
export default PrizesSum