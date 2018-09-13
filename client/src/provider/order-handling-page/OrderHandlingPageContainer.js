import {connect} from 'react-redux';
import OrderHandlingPage from './OrderHandlingPage';
import {getSelectedOrder} from './../../store/selected-order/Selectors';
import {getSelectedCar} from './../../store/selected-car/Selectors';

const mapStateToProps = (state) => {
    return {
        selectedOrder: getSelectedOrder(state),
        selectedCar: getSelectedCar(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        a: () => ""
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderHandlingPage);
