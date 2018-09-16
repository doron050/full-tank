import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import carsReducer from './cars/Reducer';
import ordersReducer from './orders/Reducer';
import selectedCarReducer from './selected-car/Reducer';
import selectedOrderReducer from './selected-order/Reducer';
import userInfoReducer from './user-info/Reducer';
import {initFirebase} from './firebase/Actions';

const combinedReducers = combineReducers({
    cars: carsReducer,
    orders: ordersReducer,
    selectedCar: selectedCarReducer,
    selectedOrder: selectedOrderReducer,
    userInfo: userInfoReducer,
});

const store = createStore(
    combinedReducers,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware
        )
    )
);

store.dispatch(initFirebase());

export default store;