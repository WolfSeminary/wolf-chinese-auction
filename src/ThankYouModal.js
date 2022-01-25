import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Modal } from "@mui/material";

export default () => {
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [rtlPlugin],
    });
    return (
        // <Modal dir="rtl" onClose={props.onClose}>
        <Modal dir="rtl">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                על מנת לשמור את נתוניך לצורך עריכת ההגרלות, נא הזן את הפרטים הבאים
            </Typography>
            <CacheProvider value={cacheRtl}>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="שם פרטי" variant="outlined" />
                    <TextField id="outlined-basic" label="שם משפחה" variant="outlined" />
                </Box>

            </CacheProvider>
        </Modal>
    )
}
