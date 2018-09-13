import {connect} from 'react-redux';
import OrderHandlingPage from './OrderHandlingPage';
import {getSelectedOrder, } from './../../store/selected-order/Selectors';
import {getSelectedCar} from './../../store/selected-car/Selectors';
import {sendSelectedOrderToDatabase, updateSelectedOrder} from "../../store/selected-order/Actions";
import CarController from './../../util/CarController'

const mapStateToProps = (state) => {
    return {
        selectedOrder: getSelectedOrder(state),
        selectedCar: getSelectedCar(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onOpenLid: async () => {
            CarController(true);
            await dispatch(updateSelectedOrder('arrivalTime', new Date().toLocaleString()));
            dispatch(sendSelectedOrderToDatabase());
        },
        onCompletedOrder: async () => {
            CarController(false);
            await dispatch(updateSelectedOrder('finishTime', new Date().toLocaleString()));
            dispatch(sendSelectedOrderToDatabase());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderHandlingPage);
