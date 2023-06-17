import { call, put, takeLatest } from "redux-saga/effects";
import { getPatientSignUpFailed, getPatientSignUpSuccess } from "../redux/actions/patientAction";
import { patientSignUpApiCall } from "../apis/patientApi";
import { GET_PATIENT_SIGN_UP_REQUEST } from "../redux/actions/actionConstants";

const REACT_APP_REST_API_URL = "http://localhost:8000";

function* getPatientSignUpSaga(action){
    const apiResponse = yield call(patientSignUpApiCall, action.payload.params, REACT_APP_REST_API_URL);
    console.log(apiResponse, "rr")
    if(!apiResponse.error){
        yield put(getPatientSignUpSuccess(apiResponse));
    } else{
        yield put(getPatientSignUpFailed(apiResponse));
    }
}
export function* watchPatientSignUpRequest(){
    yield takeLatest(GET_PATIENT_SIGN_UP_REQUEST, getPatientSignUpSaga)
}