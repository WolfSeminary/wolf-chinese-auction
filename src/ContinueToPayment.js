import React from 'react'
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router-dom";

export default function PaymentBtn() {
    let navigate = useNavigate();
    return (
        <Button variant="outlined" startIcon={<ArrowBackIosNewIcon />} color="primary" onClick={() => navigate(`/PaymentPage`)}>
            המשך לתשלום
        </Button>
    );
}
