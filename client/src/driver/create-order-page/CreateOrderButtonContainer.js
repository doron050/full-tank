import Button from '@material-ui/core/Button'
import {connect} from 'react-redux';
import {updateSelectedOrder} from '../../store/selected-order/Actions';

function mapStateToProps(state, ownProps) {
    return {

    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: async () => {
            if (!ownProps.coords){
                console.error('No location available');
                return;
            }



            await dispatch(updateSelectedOrder('latitude', ownProps.coords.latitude));
            await dispatch(updateSelectedOrder('longitude', ownProps.coords.longitude));
            //dispatch(sendSelectedOrderToDatabase());
        }
    }
}

function mergeProps(stateProps, dispatchProps){
    return {
        variant: 'contained',
        color: 'primary',
        children: "Go",

        onClick: dispatchProps.onClick
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Button)
