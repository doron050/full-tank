import PendingOrdersPage from './PendingOrdersPage'
import {connect} from 'react-redux';
//import {sendSelectedOrderToDatabase, updateSelectedOrder} from '../../store/selected-order/Actions';
import {getPendingOrders} from '../../store/orders/Selectors';

function mapStateToProps(state) {
    return {
        orders: getPendingOrders(state)
    }
}

// function mapDispatchToProps(dispatch, ownProps) {
//     return {
//         onClick: async () => {
//             if (!ownProps.coords){
//                 console.error('No location available');
//                 return;
//             }
//
//
//
//             await dispatch(updateSelectedOrder('latitude', ownProps.coords.latitude));
//             await dispatch(updateSelectedOrder('longitude', ownProps.coords.longitude));
//             dispatch(sendSelectedOrderToDatabase());
//
//             ownProps.history.push("/status-page")
//         }
//     }
// }

// function mergeProps(stateProps, dispatchProps){
//     return {
//         variant: 'contained',
//         color: 'primary',
//         children: "Go",
//
//         onClick: dispatchProps.onClick
//     }
// }

export default connect(mapStateToProps)(PendingOrdersPage);
