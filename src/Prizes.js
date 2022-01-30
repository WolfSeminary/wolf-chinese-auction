import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Prize from './Prize'
import TitleAppBar from './TitleAppBar';

const Prizes = (props) => {
    return (<>
    <TitleAppBar/>
   <br></br>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3, mr: 15 }} columns={{ xs: 4, sm: 4, md: 8 }}>
                {props.prizes.map((item) => (
                    <Grid item xs={2} sm={4} md={4} key={item.ID}>
                        <div style={{ marginLeft: '31%' }}>
                            <Prize
                                ID={item.PrizeID}
                                Name={item.prizeName}
                                Description={item.prizeDescription}
                                Price={item.prizePrice}
                                Image={item.prizeImage}
                                isSelected={item.isSelected}
                                numOfSelectedPrizes={numOfSelectedPrizes}
                            />
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    </>);
}

export default Prizes;