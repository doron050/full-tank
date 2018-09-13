import React from 'react';
import PendingOrdersMapContainer from './PendingOrdersMapContainer';
import PendingOrdersTableContainer from './PendingOrdersTableContainer';
import {geolocated} from 'react-geolocated';

function PendingOrdersPage(props){
    return (
        <div>
            <div style={{fontSize: 30}}>
                Pending Orders
            </div>

            <PendingOrdersMapContainer {...props}/>

            <PendingOrdersTableContainer {...props}/>
        </div>
    )
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
    geolocationProvider: navigator.geolocation
})(PendingOrdersPage);
