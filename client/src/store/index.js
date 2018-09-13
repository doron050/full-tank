import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import carsReducer from "./cars/Reducer";
import ordersReducer from "./orders/Reducer";
import {initFirebase} from './firebase/Actions';

const combinedReducers = combineReducers({
    cars: carsReducer,
    orders: ordersReducer,
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