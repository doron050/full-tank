import React from 'react';
import LocationMap from '../../driver/create-order-page/where/LocationMap';
import {geolocated} from 'react-geolocated';

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
    geolocationProvider: navigator.geolocation
})(LocationMap);
