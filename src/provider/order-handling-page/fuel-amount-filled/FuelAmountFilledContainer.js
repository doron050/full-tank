import {connect} from 'react-redux';
import {sendSelectedOrderToDatabase, updateSelectedOrder} from '../../../store/selected-order/Actions';
import {getSelectedOrder} from '../../../store/selected-order/Selectors';
import FuelAmountFilled from './FuelAmountFilled';

function mapStateToProps(state) {
    return {
        value: getSelectedOrder(state).fuelAmountFilled ? getSelectedOrder(state).fuelAmountFilled : '',
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: async (key, value) => {
            await dispatch(updateSelectedOrder(key, value));
            dispatch(sendSelectedOrderToDatabase());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FuelAmountFilled)
