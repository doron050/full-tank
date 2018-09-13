import {getSelectedOrder} from '../../../store/selected-order/Selectors';
import CarNumber from './CarNumber';
import {connect} from 'react-redux';

function mapStataToProps(state){
    return {
        carNumber : getSelectedOrder(state).carNumber,
    }
}

export default connect(mapStataToProps)(CarNumber);