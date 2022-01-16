import React from 'react'
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function PaymentBtn() {
    return (
            <Button variant="outlined" startIcon={<ArrowBackIosNewIcon />} color="primary">
                המשך לתשלום
            </Button>
    );
}
