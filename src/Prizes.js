import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
<<<<<<< HEAD
import Prize from './Prize'
import Checkbox from './Checkbox'
=======
>>>>>>> origin/master

const Prizes = () => {
    const [prizes, setPrizes] = useState(
        [
            {
                ID: 1,
                Name: "חדר ילדים",
                // image:<Image URL here></Image>,
                Description: "ארון עץ, מיטת נוער, שולחן",
                Price: 30
<<<<<<< HEAD
            },
=======
            }, 
>>>>>>> origin/master
            {
                ID: 2,
                Name: "חדר ילדים",
                // image:<Image URL here></Image>,
                Description: "ארון עץ, מיטת נוער, שולחן",
                Price: 40
            },
            {
                ID: 3,
                Name: "חדר ילדים",
                // image:<Image URL here></Image>,
                Description: "ארון עץ, מיטת נוער, שולחן",
                Price: 20
            },
            {
                ID: 4,
                Name: "חדר ילדים",
                // image:<Image URL here></Image>,
                Description: "ארון עץ, מיטת נוער, שולחן",
                Price: 50
            }

        ]
    )
    return (<>
        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={{ xs: 2, md: 3, mr: 15 }} columns={{ xs: 4, sm: 4, md: 8 }}>
                {prizes.map((item) => (

                    <Grid item xs={2} sm={4} md={4} key={item.ID}>
                        <div style={{ marginLeft: '31%' }}>
                            <Prize
                                ID={item.ID}
                                Name={item.Name}
                                Description={item.Description}
                                Price={item.Price}
                            />
                        </div>
                        <div>
                            <Checkbox />
                        </div>

                    </Grid>

                ))}

            </Grid>

        </Box>
    </>);
}

export default Prizes;
