import React from 'react';
import PendingOrdersMapContainer from './PendingOrdersMapContainer';
import PendingOrdersTableContainer from './PendingOrdersTableContainer';

export default function PendingOrdersPage(props){
    return (
        <div>
            <div style={{fontSize: 30}}>
                Pending Orders
            </div>

            <PendingOrdersMapContainer/>

            <PendingOrdersTableContainer/>
        </div>
    )
}