import TextField from '@material-ui/core/TextField'
import {connect} from 'react-redux';
import {updateSelectedOrder} from '../../../store/selected-order/Actions';
import {getSelectedOrder} from '../../../store/selected-order/Selectors';

function mapStateToProps(state) {
    console.log( getSelectedOrder(state).lastFuelTime);
    return {
        type: 'datetime-local',
        value: getSelectedOrder(state).lastFuelTime,
        InputProps: {
            disableUnderline: true,
            style: {
                fontSize: 30,
            },
        },
        style:{
            width: 350
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: event => dispatch(updateSelectedOrder('lastFuelTime', event.target.value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextField)
