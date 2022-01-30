import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow } from '@mui/material';

function PricesTable({items}) {
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
            {items.map((item) => {
              return (
                <div key={item.PrizeID}>
                  <TableCell align="center">{item.prizeName}</TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>
                </div>)
            })}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PricesTable
