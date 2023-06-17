import { all, fork } from 'redux-saga/effects';
import { watchDoctorSignUpRequest, watchGetDoctorListRequest } from './doctorSaga';
import { watchPatientSignUpRequest } from './patientSaga';

export default function* rootSaga(){
    yield all([
        fork(watchGetDoctorListRequest),
        fork(watchPatientSignUpRequest),
        fork(watchDoctorSignUpRequest),
    ])
}