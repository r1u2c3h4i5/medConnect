import { GET_DOCTOR_LIST_FAILED, GET_DOCTOR_LIST_REQUEST, GET_DOCTOR_LIST_SUCCESS, GET_DOCTOR_SIGN_UP_FAILED, GET_DOCTOR_SIGN_UP_REQUEST, GET_DOCTOR_SIGN_UP_SUCCESS } from "./actionConstants";

export const getDoctorListRequest = () => ({
    type: GET_DOCTOR_LIST_REQUEST,
})

export const getDoctorListSuccess = (doctorObj) => ({
    type: GET_DOCTOR_LIST_SUCCESS,
    payload: {doctorObj}
})

export const getDoctorListFailed = (error) => ({
    type: GET_DOCTOR_LIST_FAILED,
    payload: {error}
})

export const getDoctorSignUpRequest = (params) => ({
    type: GET_DOCTOR_SIGN_UP_REQUEST,
    payload: {params}
})

export const getDoctorSignUpSuccess = (doctorSignUpObj) => ({
    type: GET_DOCTOR_SIGN_UP_SUCCESS,
    payload: {doctorSignUpObj}
})

export const getDoctorSignUpFailed = (error) => ({
    type: GET_DOCTOR_SIGN_UP_FAILED,
    payload: { error }
})