import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PrizesSum from "./PrizesSum";

export default function TitleAppBar({ numOfSelectedPrizes }) {
  return (
    <AppBar position="static">
      <Toolbar style={{ textAlign: "center" }}>
        {numOfSelectedPrizes >= 0 && (
          <PrizesSum numOfSelectedPrizes={numOfSelectedPrizes} />
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ברוכים הבאים למכירת החסד של סמינר וולף
          <p style={{ margin: "0px" }}>מפעל הבית</p>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
