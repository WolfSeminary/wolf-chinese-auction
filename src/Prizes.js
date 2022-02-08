import React from "react";
import { Box, Grid } from "@mui/material";
import Prize from "./Prize";
import PaymentPage from "./PaymentPage";

export default function Prizes({ prizes }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3, mr: 15 }}
          columns={{ xs: 4, sm: 4, md: 8 }}
        >
          {prizes.map((item) => (
            <Grid item xs={2} sm={4} md={4} key={item.ID}>
              <Prize
                ID={item.PrizeID}
                Name={item.prizeName}
                Description={item.prizeDescription}
                Price={item.prizePrice}
                Image={item.prizeImage}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <PaymentPage prizes={prizes} />
    </>
  );
}
