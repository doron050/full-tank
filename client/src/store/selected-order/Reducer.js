import * as actionTypes from './ActionTypes';

const initialState = {
    isFullTank: true,
    lastFuelTime: getTomorrow(),
    maxPrice: 50,
};

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

function getTomorrow() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(10, 0, 0, 0);
    return tomorrow.toJSON().substr(0, 16)
}

