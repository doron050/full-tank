import TextField from '@material-ui/core/TextField'
import {connect} from 'react-redux';
import {updateSelectedOrder} from '../../../store/selected-order/Actions';
import {getSelectedOrder} from '../../../store/selected-order/Selectors';

function mapStateToProps(state) {
    return {
        type: 'datetime-local',
        value: getSelectedOrder(state).lastFuelTime ? getSelectedOrder(state).lastFuelTime : '',
        InputProps: {
            disableUnderline: true,
            style: {
                fontSize: 30,
            },
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: event => dispatch(updateSelectedOrder('lastFuelTime', event.target.value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextField)
