import * as actionTypes from './ActionTypes';

const initialState = {};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.SELECT_CAR:
        case actionTypes.UPDATE_SELECTED_CAR:
            return action.payload;

        case actionTypes.CLEAR_SELECTED_CAR:
            return initialState;

        default:
            return state
    }
}

