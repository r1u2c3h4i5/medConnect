import { all, fork } from 'redux-saga/effects';
import { watchGetDoctorListRequest } from './doctorSaga';

export default function* rootSaga(){
    yield all([
        fork(watchGetDoctorListRequest),
    ])
}