import React from 'react';
import BeaconImage from '../../driver/create-order-page/black-map-marker.jpg';

export default function OrderBeacon() {
    return (
        <img src={BeaconImage}
             style={{
                 height: 35,
             }}
             alt=""
        />
    )
}