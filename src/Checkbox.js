import * as React from 'react';
// import Checkbox from '@mui/material/Checkbox';
import { CheckBox } from '@mui/icons-material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function Checkbox() {
    return (
        <div>
            <CheckBox {...label} />
        </div>
    );
}

