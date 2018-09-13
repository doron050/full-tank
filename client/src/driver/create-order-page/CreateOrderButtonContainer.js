import Button from '@material-ui/core/Button'
import {connect} from 'react-redux';
import {sendSelectedOrderToDatabase, updateSelectedOrder} from '../../store/selected-order/Actions';
import {withRouter} from 'react-router-dom';

function mapStateToProps() {
    return {}
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: async () => {
            if (!ownProps.coords) {
                console.error('No location available');
                return;
            }


            await dispatch(updateSelectedOrder('latitude', ownProps.coords.latitude));
            await dispatch(updateSelectedOrder('longitude', ownProps.coords.longitude));
            dispatch(sendSelectedOrderToDatabase());

            ownProps.history.push('/status-page')
        }
    }
}

function mergeProps(stateProps, dispatchProps) {
    return {
        variant: 'contained',
        color: 'primary',
        children: "Fill her up!",
        style: {
            width: "95%",
            marginBottom: 20,
        },

        onClick: dispatchProps.onClick
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Button));
