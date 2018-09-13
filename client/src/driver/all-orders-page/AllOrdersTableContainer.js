import React from 'react';
import {connect} from 'react-redux';
import {getOrders} from '../../store/orders/Selectors';
import OrderStatusTable from './AllOrdersTable';
import {withRouter} from 'react-router-dom';

function mapStateToProps(state, ownProps) {
    if(!getOrders(state))
        return <div> Loading</div>;

    return {
        orders: getOrders(state),
        onClick:(orderId) => ownProps.history.push('/order-status/' + orderId)
    }
}

export default withRouter(connect(mapStateToProps)(OrderStatusTable));
