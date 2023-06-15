import {combineReducers} from 'redux'
import doctorReducer from './doctorReducer';
import userReducer from './userReducer';

export default combineReducers({
    doctor: doctorReducer,
    user: userReducer,
});