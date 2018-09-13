import React from 'react';
import {connect} from 'react-redux';
import {getOrderById} from '../../store/orders/Selectors';
import OrderStatusTable from './OrderStatusTable';

function mapStateToProps(state, ownProps) {
    if(!getOrderById(state, ownProps.orderId))
        return <div> Loading</div>;

    return {
        createdTime: getOrderById(state, ownProps.orderId).createdTime,
        startedTime: getOrderById(state, ownProps.orderId).startedTime,
    }
}

export default connect(mapStateToProps)(OrderStatusTable)
