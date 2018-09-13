import React from 'react';
import LocationMap from './LocationMap';
import CreateOrderButtonContainer from './CreateOrderButtonContainer';


export default function CreateOrderPage(props) {
    return (
        <div>
            Create new order

            <LocationMap {...props} />

            <CreateOrderButtonContainer {...props}/>
        </div>
    )
}