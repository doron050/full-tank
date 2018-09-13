import {geolocated} from 'react-geolocated';
import CreateOrderPage from './CreateOrderPage';

export default geolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
        geolocationProvider: navigator.geolocation
    })(CreateOrderPage);
