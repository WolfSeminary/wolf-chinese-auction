
import * as React from 'react';
import Badge from '@mui/material/Badge';

const Gifticon=()=>{
    return <img src="https://img.icons8.com/ios-glyphs/30/000000/gift--v1.png"/>
}
const PrizesSum=()=>{
 return  ( <Badge badgeContent={0} color="primary">
<Gifticon />
</Badge>
)
}
export default PrizesSum