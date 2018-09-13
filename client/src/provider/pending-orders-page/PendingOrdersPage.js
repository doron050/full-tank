import React from 'react';
import LocationMap from '../../driver/create-order-page/where/LocationMap';
//import CreateOrderButtonContainer from './CreateOrderButtonContainer';
import {geolocated} from 'react-geolocated';
//import OrderTimePickerContainer from './OrderTimePickerContainer';

function PendingOrdersPage(props) {
    return (
        <div>
            Pending orders:

            <LocationMap {...props} />

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
