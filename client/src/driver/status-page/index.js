import React from 'react';
import OrderStatusTableContainer from './OrderStatusTableContainer';
import SeeAllOrdersButton from './SeeAllOrdersButton';

export default function StatusPage({match}){
    return (
        <div>
            <div style={{fontSize:30}}>
                Order Status - {match.params.orderId}
            </div>

            <OrderStatusTableContainer orderId={match.params.orderId} />

            <SeeAllOrdersButton/>
        </div>
    )
}