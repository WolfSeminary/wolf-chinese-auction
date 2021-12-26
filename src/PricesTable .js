import * as React from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,Paper,TableRow} from '@mui/material';
function PricesTable () {
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
              <TableCell align="center">חדר ילדים</TableCell>
              <TableCell align="center">3</TableCell>
              <TableCell align="center">60</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default PricesTable 
