import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import _ from 'lodash';
import CarNumber from '../../driver/create-order-page/which-car/CarNumber';

export default function SimpleTable(props) {
    return (
        <Paper style={{margin:10}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Created Time</TableCell>
                        <TableCell>Distance</TableCell>
                        <TableCell>Car Number</TableCell>
                        <TableCell>Driver Phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {_.map(props.rows, row => mapRow(row, props.onClick))}
                </TableBody>
            </Table>
        </Paper>
    );
}

function mapRow(row, onClick) {
    if (!row)
        return null;

    return (
        <TableRow key={row.id} onClick={() => onClick(row.id, row.carNumber)}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.createdTime}</TableCell>
            <TableCell>{row.distance}</TableCell>
            <TableCell><CarNumber carNumber={row.carNumber}/></TableCell>
            <TableCell>{row.driverPhone}</TableCell>
        </TableRow>
    )
}
