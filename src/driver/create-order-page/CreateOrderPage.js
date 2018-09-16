import React from 'react';
import LocationMap from './where/LocationMap';
import CreateOrderButtonContainer from './CreateOrderButtonContainer';
import {geolocated} from 'react-geolocated';
import OrderTimePickerContainer from './when/OrderTimePickerContainer';
import MainBox from './MainBox';
import MaxPriceContainer from './how-much/MaxPriceContainer';
import CarNumberContainer from './which-car/CarSelectorContainer';

function CreateOrderPage(props) {
    return (
        <div>

            <MainBox title="When?">
                <OrderTimePickerContainer/>
            </MainBox>

            <MainBox title="How Much?">
                <MaxPriceContainer/>
            </MainBox>

            <MainBox title="Which Car?">
                <CarNumberContainer/>
            </MainBox>

            <MainBox title="Where?">
                <LocationMap {...props} />
            </MainBox>

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
