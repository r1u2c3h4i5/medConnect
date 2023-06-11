import { GET_DOCTOR_LIST_FAILED, GET_DOCTOR_LIST_REQUEST, GET_DOCTOR_LIST_SUCCESS } from "./actionConstants";

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