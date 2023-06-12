import { GET_SIGN_IN_REQUEST, GET_SIGN_IN_SUCCESS, GET_SIGN_UP_FAILED, GET_SIGN_UP_REQUEST, GET_SIGN_UP_SUCCESS } from "./actionConstants";

export const getSignUpRequest = (params) => ({
    type: GET_SIGN_UP_REQUEST,
    payload: {params}
})

export const getSignUpSuccess = (signUpObj) => ({
    type: GET_SIGN_UP_SUCCESS,
    payload: {signUpObj}
})

export const getSignUpFailed = (error) => ({
    type: GET_SIGN_UP_FAILED,
    payload: { error }
})

export const getSignInRequest = (params) => ({
    type: GET_SIGN_IN_REQUEST,
    payload: { params }
})

export const getSignInSuccess = (signInObj) => ({
    type: GET_SIGN_IN_SUCCESS,
    payload: { signInObj }
})
