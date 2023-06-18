import { all, fork } from 'redux-saga/effects';
import { watchDoctorSignUpRequest, watchGetDoctorListRequest } from './doctorSaga';
import { watchPatientSignUpRequest } from './patientSaga';
import { watchGetUserLogInRequest } from './userSaga';

export default function* rootSaga(){
    yield all([
        fork(watchGetDoctorListRequest),
        fork(watchPatientSignUpRequest),
        fork(watchDoctorSignUpRequest),
        fork(watchGetUserLogInRequest),
    ])
}