import { all, fork } from 'redux-saga/effects';
import { watchGetDoctorListRequest } from './doctorSaga';
import { watchPatientSignUpRequest } from './userSaga';

export default function* rootSaga(){
    yield all([
        fork(watchGetDoctorListRequest),
        fork(watchPatientSignUpRequest),
    ])
}