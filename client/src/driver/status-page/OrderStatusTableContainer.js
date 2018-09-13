import React from 'react';
import {connect} from 'react-redux';
import {getOrderById} from '../../store/orders/Selectors';
import OrderStatusTable from './OrderStatusTable';

function mapStateToProps(state, ownProps) {
    if (!getOrderById(state, ownProps.orderId))
        return <div> Loading</div>;

    return {
        createdTime: getOrderById(state, ownProps.orderId).createdTime,
        onTheWayTime: getOrderById(state, ownProps.orderId).onTheWayTime,
        arrivalTime: getOrderById(state, ownProps.orderId).arrivalTime,
        finishTime: getOrderById(state, ownProps.orderId).finishTime,
        fuelAmountFilled: getOrderById(state, ownProps.orderId).fuelAmountFilled + " Liters",
    }
}

export default connect(mapStateToProps)(OrderStatusTable)
