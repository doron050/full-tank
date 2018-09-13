import {connect} from 'react-redux';
import {getPendingOrders} from '../../store/orders/Selectors';
import LocationMap from '../../driver/create-order-page/where/LocationMap';

function mapStateToProps(state, ownProps) {
    return {
        orders: getPendingOrders(state),
        ...ownProps
    }
}

export default connect(mapStateToProps)(LocationMap);
