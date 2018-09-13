import {connect} from 'react-redux';
import {updateSelectedOrder} from '../../../store/selected-order/Actions';
import {getSelectedOrder} from '../../../store/selected-order/Selectors';
import FuelAmountFilled from './FuelAmountFilled';

function mapStateToProps(state) {
    return {
        value: getSelectedOrder(state).fuelAmountFilled ? getSelectedOrder(state).fuelAmountFilled : '',
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: (key, value) => dispatch(updateSelectedOrder(key, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FuelAmountFilled)
