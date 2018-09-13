import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import _ from 'lodash';

export default function SimpleTable(props) {
    return (
        <Paper style={{margin:10}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {_.map(props.orders, order => getRow(order, props.onClick))}
                </TableBody>
            </Table>
        </Paper>
    );
}

function getRow(order, onClick) {
    return (
        <TableRow onClick={() => onClick(order.id)} key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.status}</TableCell>
            <TableCell>{new Date(order.createdTime).toLocaleDateString()}</TableCell>
        </TableRow>
    )
}
