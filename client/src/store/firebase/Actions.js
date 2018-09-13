import * as firebase from 'firebase';
import {receiveOrders} from '../orders/Actions';
import {receiveCars} from '../cars/Actions';

const firebaseConfig = {
    apiKey: 'AIzaSyAOdZqv8g93gmXHSBD3g1O3RWvUQnxqaKk',
    authDomain: 'full-tank-app.firebaseapp.com',
    databaseURL: 'https://full-tank-app.firebaseio.com',
    projectId: 'full-tank-app',
    storageBucket: 'full-tank-app.appspot.com',
    messagingSenderId: '705307117598'
};

export function initFirebase() {
    return async function signInRequest(dispatch) {

        await firebase.initializeApp(firebaseConfig);
        await dispatch(fetchData('cars', receiveCars));
        await dispatch(fetchData('orders', receiveOrders));
    }
}

export function fetchData(collectionName, actionCallback) {
    return function afterSignedIn(dispatch) {
        firebase.database().ref(collectionName).on('value', snapshot => {
                dispatch(actionCallback(snapshot.val()));
            },
            error => {
                console.error('The request for ' + collectionName + ' failed: ' + error.code);
            });
    }
}

export function sendDataToDatabase(collectionPath, value) {
    return firebase.database().ref(collectionPath).set(value);
}


export function pushDataToDatabase(collectionPath, value) {
    return firebase.database().ref(collectionPath).push(value);
}
