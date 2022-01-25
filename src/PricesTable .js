import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow, TableSortLabel } from '@mui/material';

function PricesTable(props) {
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
            {props.map((item) => {
              return (
                <div key={item.PrizeID}>
                   <TableSortLabel
                  // active={props.sortBy === "bmonth"}
                  direction={'asc'}
                  // onClick={props.requestSort("bmonth")}
                >
                  Born in
                </TableSortLabel>
                  {/* <TableCell align="center" direction={"asc"}>{item.prizeName}</TableCell> */}
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
