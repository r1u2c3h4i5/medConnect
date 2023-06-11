import { call, put, takeLatest } from "redux-saga/effects";
import { GET_DOCTOR_LIST_REQUEST } from "../redux/actions/actionConstants";
// import REACT_APP_REST_API_URL from '../config/config';
import { getDoctorListApiCall } from "../apis/doctorApi";
import { getDoctorListFailed, getDoctorListSuccess } from "../redux/actions/doctorAction";

const REACT_APP_REST_API_URL = "http://localhost:8000";

function* getDoctorListSaga(){
    const restApiUrl = REACT_APP_REST_API_URL;
    const apiResponse = yield call(getDoctorListApiCall, restApiUrl)
    if(!apiResponse.error){
        yield put(getDoctorListSuccess(apiResponse.doctorsList));
    } else {
        yield put(getDoctorListFailed(apiResponse.error));
    }
}

export function* watchGetDoctorListRequest(){
   yield takeLatest(GET_DOCTOR_LIST_REQUEST, getDoctorListSaga)
}