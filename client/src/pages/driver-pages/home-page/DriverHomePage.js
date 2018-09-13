import React, { Component } from 'react';
import autoBind from 'react-autobind';
import PropTypes from "prop-types";

export default class DriverHomePage extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        return (
            <div>
                <div style={{fontSize: 24}}>{this.props.driverName}</div>

                <div style={{paddingBottom: '10px', paddingTop: '10px'}}>
                    <img src='http://www.nexgenfuel.com/wp-content/uploads/2015/09/icon_gasStation_200-150x150.png'/>
                </div>

                <div>
                    <span>44-666-55</span> <span>Octane 95</span>
                </div>
            </div>
        );
    }
}

DriverHomePage.propTypes = {
    cars: PropTypes.array.isRequired,
    driverName: PropTypes.string.isRequired,
    selectedCar: PropTypes.object.isRequired,
};
