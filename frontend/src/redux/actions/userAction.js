import { GET_USER_SIGN_IN_FAILED, GET_USER_SIGN_IN_REQUEST, GET_USER_SIGN_IN_SUCCESS } from "./actionConstants"

export const getUserSignInRequest = (params) => {
    return{
        type: GET_USER_SIGN_IN_REQUEST,
        payload: {params}
    }
}

export const getUserSignInSuccess = (signInObj) =>{
    return {
        type: GET_USER_SIGN_IN_SUCCESS,
        payload: {signInObj}
    }
}

export const getUserSignInFailed = (errorMessage) =>{
    return {
        type: GET_USER_SIGN_IN_FAILED,
        payload: {errorMessage}
    }
}