import React from 'react';


export default function LocationMap(props){
    if(!props.isGeolocationAvailable){
        return <div>Your browser does not support Geolocation</div>
    }

    if(!props.isGeolocationEnabled){
        return <div>Geolocation is not enabled</div>
    }

    if(!props.coords){
        return <div>Searching for location</div>
    }


    return (
        <table>
            <tbody>
            <tr>
                <td>latitude</td>
                <td>{props.coords.latitude}</td>
            </tr>
            <tr>
                <td>longitude</td>
                <td>{props.coords.longitude}</td>
            </tr>
            <tr>
                <td>altitude</td>
                <td>{props.coords.altitude}</td>
            </tr>
            <tr>
                <td>heading</td>
                <td>{props.coords.heading}</td>
            </tr>
            <tr>
                <td>speed</td>
                <td>{props.coords.speed}</td>
            </tr>
            </tbody>
        </table>
    )
}