import React from "react";
import Badge from "@mui/material/Badge";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

export default function PrizesSum({ numOfSelectedPrizes }) {
  return (
    <Badge badgeContent={numOfSelectedPrizes} color="primary">
      <CardGiftcardIcon color="action" />
    </Badge>
  );
}
