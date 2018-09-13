import React from 'react';
import OrderStatusTableContainer from './OrderStatusTableContainer';

export default function StatusPage({match}){
    return (
        <div>
            <div style={{fontSize:30}}>
                Order Status
            </div>

            <OrderStatusTableContainer orderId={match.params.orderId} />
        </div>
    )
}