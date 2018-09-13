import {getSelectedOrder} from './Selectors';
import {updateValue} from '../../util/ObjectUpdater';
import {
    CLEAR_SELECTED_ORDER,
    SELECT_ORDER,
    UPDATE_SELECTED_ORDER
} from './ActionTypes';
import {sendDataToDatabase} from '../firebase/Actions';
import {getOrderById} from '../orders/Selectors';

export function selectOrder(orderId) {
    return function selectCar(dispatch, getState) {
        const order = getOrderById(getState(), orderId);
        dispatch({
            type: SELECT_ORDER,
            payload: order
        })
    };
}

export function updateSelectedOrder(key, value) {
    return function updateSelectedOrganization(dispatch, getState) {
        const selectedOrder = updateValue(getSelectedOrder(getState()), key, value);
        dispatch({
            type: UPDATE_SELECTED_ORDER,
            payload: selectedOrder,
        });
    }
}

export function sendSelectedOrderToDatabase() {
    return async function sendSelectedOrganizationToDatabase(dispatch, getState) {
        const selectedOrder = getSelectedOrder(getState());

        return sendDataToDatabase('/orders/' + selectedOrder.id, selectedOrder);
    }
}

export function clearSelectedOrder() {
    return {
        type: CLEAR_SELECTED_ORDER,
    }
}
