import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
} from "@mui/material";

export default function PrizesTable(props) {
  const [prizes, setPrizes] = useState(
    props.prizes.filter((p) => p.isSelected)
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableCell align="center">פריט</TableCell>
          <TableCell align="center">כמות</TableCell>
          <TableCell align="center">מחיר</TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            {prizes?.map((item) => {
              return (
                <div key={item.PrizeID}>
                  <TableCell align="center">{item.prizeName}</TableCell>
                  <TableCell align="center">{item.isSelected}</TableCell>
                  <TableCell align="center">
                    {item.prizePrice * item.isSelected}
                  </TableCell>
                </div>
              );
            })}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
