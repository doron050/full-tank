import * as actionTypes from './ActionTypes';

const initialState = {};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.SELECT_ORDER:
        case actionTypes.UPDATE_SELECTED_ORDER:
            return action.payload;

        case actionTypes.CLEAR_SELECTED_ORDER:
            return initialState;

        default:
            return state
    }
}

