import {getSelectedCar} from './Selectors';
import {updateValue} from '../../util/ObjectUpdater';
import {
    CLEAR_SELECTED_CAR,
    SELECT_CAR,
    UPDATE_SELECTED_CAR
} from './ActionTypes';
import {sendDataToDatabase} from '../firebase/Actions';
import {getCarById} from '../cars/Selectors';

export function selectCar(carNumber) {
    return function selectCar(dispatch, getState) {
        const car = getCarById(getState(), carNumber);
        dispatch({
            type: SELECT_CAR,
            payload: car
        })
    };
}

export function updateSelectedCar(key, value) {
    return function updateSelectedOrganization(dispatch, getState) {
        const selectedOrganization = updateValue(getSelectedCar(getState()), key, value);
        dispatch({
            type: UPDATE_SELECTED_CAR,
            payload: selectedOrganization,
        });
    }
}

export function sendSelectedCarToDatabase() {
    return async function sendSelectedOrganizationToDatabase(dispatch, getState) {
        const selectedCar = getSelectedCar(getState());

        return sendDataToDatabase('/cars/' + selectedCar.id, selectedCar);
    }
}

export function clearSelectedCar() {
    return {
        type: CLEAR_SELECTED_CAR,
    }
}
