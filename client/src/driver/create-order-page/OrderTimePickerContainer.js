import TextField from '@material-ui/core/TextField'
import {connect} from 'react-redux';
import {updateSelectedOrder} from '../../store/selected-order/Actions';
import {getSelectedOrder} from '../../store/selected-order/Selectors';

function mapStateToProps(state) {
    return {
        id: 'datetime-local',
        helperText: 'Last fuel time',
        type: 'time',
        // defaultValue: "",
        value: getSelectedOrder(state).lastFuelTime ? getSelectedOrder(state).lastFuelTime : '03:00',
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: event => dispatch(updateSelectedOrder('lastFuelTime', event.target.value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextField)
