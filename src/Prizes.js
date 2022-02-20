import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Prize from "./Prize";

export default function Prizes({
  prizes,
  setNumOfSelectedPrizes,
  numOfSelectedPrizes,
  setShouldShowNoticeModal,
}) {
  const [numOf5nisPrizes, setNumOf5nisPrizes] = useState(0);
  const [numOf10nisPrizes, setNumOf10nisPrizes] = useState(0);
  const [numOf20nisPrizes, setNumOf20nisPrizes] = useState(0);

  const changeSelectedPrize = (id) => {
    prizes.forEach((item) => {
      if (id === item.PrizeID) {
        let cc = 0;
        item.isSelected = !item.isSelected;
        if (item.isSelected) cc = 1;
        else cc = -1;
        switch (item.prizePrice) {
          case "5":
            setNumOf5nisPrizes(numOf5nisPrizes + cc);
            break;
          case "10":
            setNumOf10nisPrizes(numOf10nisPrizes + cc);
            break;
          case "20":
            setNumOf20nisPrizes(numOf20nisPrizes + cc);
            break;
          default:
        }
      }
    });
  };

  useEffect(() => {
    if (
      (numOf5nisPrizes && !(numOf5nisPrizes % 3)) ||
      (numOf20nisPrizes && !(numOf20nisPrizes % 3)) ||
      (numOf10nisPrizes && !(numOf10nisPrizes % 3))
    ) {
      setShouldShowNoticeModal(true);
      setTimeout(() => {
        setShouldShowNoticeModal(false);
      }, 3000);
    }
  }, [numOf5nisPrizes, numOf10nisPrizes, numOf20nisPrizes]);

  return (
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
              setNumOfSelectedPrizes={setNumOfSelectedPrizes}
              numOfSelectedPrizes={numOfSelectedPrizes}
              changeSelectedPrize={changeSelectedPrize}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
