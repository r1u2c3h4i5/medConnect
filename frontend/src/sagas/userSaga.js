import { call, put, takeLatest } from "redux-saga/effects";
import { GET_USER_SIGN_IN_REQUEST } from "../redux/actions/actionConstants";
import { getUserSignInSuccess } from "../redux/actions/userAction";
import { getUserLogInApiCall } from "../apis/userApi";

const  REACT_APP_REST_API_URL = "http://localhost:8000" 

function* getUserLogInSaga(action){
    try{
        const restApiUrl = REACT_APP_REST_API_URL;
    const apiResponse = yield call(getUserLogInApiCall, action.payload.params,restApiUrl )
    if(!apiResponse.error){
        yield put(getUserSignInSuccess(apiResponse));
    }else{
       yield put(getgetUserSignInFailed(apiResponse));
    }
    } catch(error){
        console.log('inside userSaga-> getUseLogInSaga', error);
        throw error;
    }
}
export function* watchGetUserLogInSaga(){
    yield takeLatest(GET_USER_SIGN_IN_REQUEST, getUserLogInSaga)
}