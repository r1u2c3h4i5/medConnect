import { GET_PATIENT_SIGN_UP_FAILED, GET_PATIENT_SIGN_UP_REQUEST, GET_PATIENT_SIGN_UP_SUCCESS } from "./actionConstants";

export const getPatientSignUpRequest = (params) => ({
    type: GET_PATIENT_SIGN_UP_REQUEST,
    payload: {params}
})

export const getPatientSignUpSuccess = (patientSignUpObj) => ({
    type: GET_PATIENT_SIGN_UP_SUCCESS,
    payload: {patientSignUpObj}
})

export const getPatientSignUpFailed = (error) => ({
    type: GET_PATIENT_SIGN_UP_FAILED,
    payload: { error }
})

