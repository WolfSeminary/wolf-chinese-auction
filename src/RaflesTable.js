import { Button, TableContainer } from '@mui/material';
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function RaflesTable() {
    const [curentRaffle, setcurentRaffle] = useState({
        userName: '',
        prizeName: '----'
    });

    const onMakeRaffleClick = () => {
        let listUsers = [];
        listUsers = localStorage.getItem("listUsers");
        var rand = Math.floor(Math.random() * listUsers.length()) + 1;
        setcurentRaffle({
            prizeName: localStorage.getItem("prizeName"),
            userName: listUsers[rand]
        })
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">הגרל</TableCell>
                        <TableCell align="center">פריט</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <Button variant="outlined" >!הגרל</Button>
                        <TableCell align="center">פריט</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
