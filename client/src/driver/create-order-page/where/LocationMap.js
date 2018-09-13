import React from 'react';
import GoogleMapReact from 'google-map-react';
import googleApi from '../../../consts/GoogleApi';
import MapBeacon from './MapBeacon';

export default function LocationMap(props) {
    if (!props.isGeolocationAvailable) {
        return <div>Your browser does not support Geolocation</div>
    }

    if (!props.isGeolocationEnabled) {
        return <div>Geolocation is not enabled</div>
    }

    if (!props.coords) {
        return <div>Searching for location</div>
    }

    const style = {
        height: '350px',
        width: 'auto',
        display: 'flex',
        justifyContent: 'center',
        border: "1px solid black",
        };

    return (
        <div style={style}>
            <GoogleMapReact
                bootstrapURLKeys={{key: googleApi.apiKey}}
                defaultCenter={{lat: props.coords.latitude, lng: props.coords.longitude}}
                defaultZoom={15}
            >
                <MapBeacon
                    lat={props.coords.latitude}
                    lng={props.coords.longitude}
                />
            </GoogleMapReact>
        </div>
    )
}