import React from 'react';
import BeaconImage from './map-marker-icon.png';

export default function mapBeacon() {
    return (
        <img src={BeaconImage}
             style={{
                 height: 35,
             }}
             alt=""
        />
    )
}