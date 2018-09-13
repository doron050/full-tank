import _ from 'lodash';

export function getOrders(state) {
    return state.orders;
}

export function getPendingOrders(state) {
    const orders = getOrders(state);
    return orders.filter(order => order.status === 'pending');
}


export function getOrderById(state, orderId) {
    return getOrders(state)[orderId];
}

export function getNextOrderId(state) {
    const orders = getOrders(state);
    const keys = _.keys(orders);
    if (!orders || keys.length === 0)
        return 5000;

    return _.chain(orders).keys().map(_.parseInt).max() + 1;
}