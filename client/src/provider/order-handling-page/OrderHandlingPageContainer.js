import {connect} from 'react-redux';
import OrderHandlingPage from './OrderHandlingPage';
import {getSelectedOrder, } from './../../store/selected-order/Selectors';
import {getSelectedCar} from './../../store/selected-car/Selectors';
import {sendSelectedOrderToDatabase, updateSelectedOrder} from "../../store/selected-order/Actions";
import CarController from './../../util/CarController'
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        selectedOrder: getSelectedOrder(state),
        selectedCar: getSelectedCar(state)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onOpenLid: async () => {
            CarController(true);
            await dispatch(updateSelectedOrder('arrivalTime', new Date().toLocaleString()));
            dispatch(sendSelectedOrderToDatabase());
        },
        onCompletedOrder: async () => {
            CarController(false);
            await dispatch(updateSelectedOrder('finishTime', new Date().toLocaleString()));
            await dispatch(updateSelectedOrder('status', 'Done'));
            dispatch(sendSelectedOrderToDatabase());
            ownProps.history.push('/pending-orders');
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderHandlingPage));
