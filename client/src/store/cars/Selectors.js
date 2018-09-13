export function getCars(state) {
    return state.cars;
}

export function getCarById(state, carId){
    return getCars(state)[carId];
}