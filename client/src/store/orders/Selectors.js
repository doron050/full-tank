export function getOrders(state) {
    return state.orders;
}

export function getOrderById(state, orderId){
    return getOrders(state)[orderId];
}