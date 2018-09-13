import React from 'react';
import LocationMap from './LocationMap';
import CreateOrderButtonContainer from './CreateOrderButtonContainer';
import {geolocated} from 'react-geolocated';
import OrderTimePickerContainer from './OrderTimePickerContainer';

function CreateOrderPage(props) {
    return (
        <div>
            Create new order

            <LocationMap {...props} />

            <div>
                <OrderTimePickerContainer/>
            </div>

            <CreateOrderButtonContainer {...props}/>
        </div>
    )
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
    geolocationProvider: navigator.geolocation
})(CreateOrderPage);
