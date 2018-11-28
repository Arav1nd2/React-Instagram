import { combineReducers } from 'redux';
import { Reducer } from './Reducer';
import { firebaseReducer } from 'react-redux-firebase';


export const rootReducer = combineReducers({
    auth : Reducer,
    firebase : firebaseReducer
});