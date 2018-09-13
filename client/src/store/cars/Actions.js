import * as actionTypes from './ActionTypes';

export function receiveCars(cars) {
    return {
        type: actionTypes.RECEIVE_CARS,
        payload: cars,
    };
}

