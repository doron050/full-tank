import PendingOrdersPage from './PendingOrdersMap'
import {connect} from 'react-redux';
import {getPendingOrders} from '../../store/orders/Selectors';

function mapStateToProps(state) {
    return {
        orders: getPendingOrders(state)
    }
}

export default connect(mapStateToProps)(PendingOrdersPage);
