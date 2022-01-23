import * as React from 'react';
import { Box, TextField, Typography } from '@mui/material';

export default function Winner() {
    return (
        <>
            <Typography>":והזוכה בהגרלת ---- הוא"</Typography>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="והזוכה הוא" variant="outlined" multiline />
            </Box>
        </>
    );
}
