import React, {Component} from "react";
import {geolocated} from 'react-geolocated';
import GoogleMapReact from 'google-map-react';
import Geocode from 'react-geocode';

//
// export default function AboutPage() {
//     return (
//         <div>
//             Location page
//
//         </div>
//     );
// }

class MarkMap extends Component {
    render() {
        return (
            <div>I'm here</div>
        );
    }

}

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: ""
        };
    }


    getAddress() {
        if(!this.props.coords)
            return;

        const lat = this.props.coords.latitude;
        const lng = this.props.coords.longitude;
        Geocode.setApiKey("AIzaSyCyRr2zIViTQjYzgOVQwCNEasVXYDsVHO8");
        Geocode.fromLatLng(lat, lng).then(
            response => {
                const address = response.results[0].formatted_address;
                this.setState({
                    address: address
                });
            },
            error => {
                this.setState({
                    address: error.toString()
                });
            }
        );
    }


    render() {
        this.getAddress.bind(this)();

        return !this.props.isGeolocationAvailable
            ? <div>Your browser does not support Geolocation</div>
            : !this.props.isGeolocationEnabled
                ? <div>Geolocation is not enabled</div>
                : this.props.coords
                    ?
                    <div>
                        <table>
                            <tbody>
                            <tr>
                                <td>latitude</td>
                                <td>{this.props.coords.latitude}</td>
                            </tr>
                            <tr>
                                <td>longitude</td>
                                <td>{this.props.coords.longitude}</td>
                            </tr>
                            <tr>
                                <td>altitude</td>
                                <td>{this.props.coords.altitude}</td>
                            </tr>
                            <tr>
                                <td>heading</td>
                                <td>{this.props.coords.heading}</td>
                            </tr>
                            <tr>
                                <td>speed</td>
                                <td>{this.props.coords.speed}</td>
                            </tr>
                            <tr>
                                <td>address</td>
                                <td>{this.state.address}</td>
                            </tr>
                            </tbody>
                        </table>
                        <div style={{height: '500px', width: '500px'}}>
                            <GoogleMapReact
                                bootstrapURLKeys={{key: "AIzaSyCyRr2zIViTQjYzgOVQwCNEasVXYDsVHO8"}}
                                defaultCenter={{lat: this.props.coords.latitude, lng: this.props.coords.longitude}}
                                defaultZoom={9}
                            >
                                <MarkMap
                                    lat={this.props.coords.latitude}
                                    lng={this.props.coords.longitude}
                                    text={'Home'}>

                                </MarkMap>
                            </GoogleMapReact>
                        </div>
                    </div>
                    : <div>Getting the location data&hellip; </div>;


    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
    geolocationProvider: navigator.geolocation
})(Demo);