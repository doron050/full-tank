import {connect} from 'react-redux';
import OrderHandlingPage from './OrderHandlingPage';
import {getSelectedOrder} from './../../store/selected-order/Selectors';
import {getCarById} from './../../store/cars/Selectors';

const mapStateToProps = (state) => {
    const selectedOrder = getSelectedOrder(state);
    
    return {
        selectedOrder: selectedOrder,
        selectedCar: getCarById(state, selectedOrder.carNumber)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        a: () => ""
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderHandlingPage);
