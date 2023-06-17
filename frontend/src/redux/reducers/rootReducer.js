import {combineReducers} from 'redux'
import doctorReducer from './doctorReducer';
import patientReducer from './patientReducer';
import userReducer from './userReducer';

export default combineReducers({
    doctor: doctorReducer,
    patient: patientReducer,
    user: userReducer
});