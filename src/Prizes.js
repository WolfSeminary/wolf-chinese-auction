import  React,  {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const Prizes = () => {
    const [prizes, setPrizes] = useState(
        [
            {
                ID: 1,
                Name: "חדר ילדים",
                // image:<Image URL here></Image>,
                Description: "ארון עץ, מיטת נוער, שולחן",
                Price: 30
            },
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
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 8 }}>
                {prizes.map((item, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Prize
                        ID={item.ID}
                        Name={item.Name}
                        Description={item.Description}
                        Price={item.Price}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    </>);
}

export default Prizes;