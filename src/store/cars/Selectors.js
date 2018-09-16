export function getCars(state) {
    return state.cars;
}

export function getCarById(state, carNumber){
    return getCars(state)[carNumber];
}