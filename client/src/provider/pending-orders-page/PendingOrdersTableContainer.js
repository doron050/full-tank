import {getPendingOrders} from '../../store/orders/Selectors';
import _ from 'lodash';
import {selectOrder} from '../../store/selected-order/Actions';
import PendingOrdersTable from './PendingOrdersTable';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

function mapStateToProps(state) {
    const orders = getPendingOrders(state);
    const rows = _.map(orders, order => {
        return {
            id: order.id,
            createdTime: order.createdTime,
            distance: "O KM",
            carNumber: order.carNumber,
            driverPhone: order.driverPhone,
        };
    });


    return {
        rows
    }
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        onClick: (orderId) => {
            dispatch(selectOrder(orderId));
            ownProps.history.push('/fill-fuel')
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PendingOrdersTable));