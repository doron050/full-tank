import React from 'react';
import LocationMap from './LocationMap';


export default function CreateOrderPage(props) {
    return (
        <div>
            Create new order

            <LocationMap {...props} />
        </div>
    )
}