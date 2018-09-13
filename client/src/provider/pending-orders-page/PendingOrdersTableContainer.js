import {getPendingOrders} from '../../store/orders/Selectors';
import _ from 'lodash';
import {selectOrder} from '../../store/selected-order/Actions';
import PendingOrdersTable from './PendingOrdersTable';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

function mapStateToProps(state, ownProps) {
    if (!ownProps.coords)
        return null;

    const orders = getPendingOrders(state);
    const rows = _.map(orders, order => {
        return {
            id: order.id,
            createdTime: order.createdTime,
            distance: calcCrow(ownProps.coords.latitude, ownProps.coords.longitude, order.latitude, order.longitude).toString() + " KM",
            carNumber: order.carNumber,
            driverPhone: order.driverPhone,
        };
    });


    return {
        rows
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: (orderId) => {
            dispatch(selectOrder(orderId));
            ownProps.history.push('/order-handling')
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PendingOrdersTable));


//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
function calcCrow(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    lat1 = toRad(lat1);
    lat2 = toRad(lat2);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
}

// Converts numeric degrees to radians
function toRad(Value) {
    return Value * Math.PI / 180;
}