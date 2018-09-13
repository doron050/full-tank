import {connect} from 'react-redux';
import {updateSelectedOrder} from '../../../store/selected-order/Actions';
import {getSelectedOrder} from '../../../store/selected-order/Selectors';
import MaxPrice from './MaxPrice';

function mapStateToProps(state) {
    const stotrFullTank = getSelectedOrder(state).isFullTank

    return {
        isFullTank: stotrFullTank || stotrFullTank === undefined,
        value: getSelectedOrder(state).maxPrice ? getSelectedOrder(state).maxPrice : '',
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: (key, value) => dispatch(updateSelectedOrder(key, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MaxPrice)
