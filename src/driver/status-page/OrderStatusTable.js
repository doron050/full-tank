import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function SimpleTable(props) {
    return (
        <Paper style={{margin:10}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Status</TableCell>
                        <TableCell>Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {getRow("Created order", props.createdTime)}
                    {getRow("We are on the way", props.onTheWayTime)}
                    {getRow("We are here", props.arrivalTime)}
                    {getRow("Gas filled", props.fuelAmountFilled)}
                    {getRow("Done!", props.finishTime)}
                </TableBody>
            </Table>
        </Paper>
    );
}

function getRow(title, value) {
    if (!value)
        return null;

    return (
        <TableRow>
            <TableCell>{title}</TableCell>
            <TableCell>{value}</TableCell>
        </TableRow>
    )
}
