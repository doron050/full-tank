import React from 'react';
import AllOrdersTableContainer from './AllOrdersTableContainer';

export default function AllOrdersPage(){
    return (
        <div>
            <div style={{fontSize:30}}>
                All Orders
            </div>

            <AllOrdersTableContainer/>
        </div>
    )
}