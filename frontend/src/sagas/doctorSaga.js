import { call, put, takeLatest } from "redux-saga/effects";
import { GET_DOCTOR_LIST_REQUEST, GET_DOCTOR_SIGN_UP_REQUEST } from "../redux/actions/actionConstants";
import { doctorSignUpApiCall, getDoctorListApiCall } from "../apis/doctorApi";
import { getDoctorListFailed, getDoctorListSuccess, getDoctorSignUpFailed, getDoctorSignUpSuccess } from "../redux/actions/doctorAction";

const REACT_APP_REST_API_URL = "http://localhost:8000";

function* getDoctorListSaga() {
    try {
        const restApiUrl = REACT_APP_REST_API_URL;
        const apiResponse = yield call(getDoctorListApiCall, restApiUrl)
        if (!apiResponse.error) {
            yield put(getDoctorListSuccess(apiResponse.doctorsList));
        } else {
            yield put(getDoctorListFailed(apiResponse.error));
        }
    } catch (error) {
        console.log("inside doctorSaga-> getDoctorListSaga", error);
        throw error;
    }
}

export function* watchGetDoctorListRequest() {
    yield takeLatest(GET_DOCTOR_LIST_REQUEST, getDoctorListSaga)
}

function* getDoctorSignUpSaga(action) {
    try {
        const apiResponse = yield call(doctorSignUpApiCall, action.payload.params, REACT_APP_REST_API_URL);
        console.log(apiResponse, "rr")
        if (!apiResponse.error) {
            yield put(getDoctorSignUpSuccess(apiResponse));
        } else {
            yield put(getDoctorSignUpFailed(apiResponse));
        }
    } catch (error) {
        console.log("inside doctorSaga -> getDoctorSignUpSaga", error);
        throw error;
    }
}
export function* watchDoctorSignUpRequest() {
    yield takeLatest(GET_DOCTOR_SIGN_UP_REQUEST, getDoctorSignUpSaga)
}