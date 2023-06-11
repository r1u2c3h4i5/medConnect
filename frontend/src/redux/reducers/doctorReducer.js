import { GET_DOCTOR_LIST_FAILED, GET_DOCTOR_LIST_SUCCESS } from "../actions/actionConstants";

const doctorReducer = (state = {}, action) => {
    switch(action.type){
        case GET_DOCTOR_LIST_SUCCESS: {
            return {
                ...state, 
                doctorObj: action.payload.doctorObj
            }
        }
        case GET_DOCTOR_LIST_FAILED: {
            return {
                ...state,
                error: action.payload.error
            }
        }
        default: {
            return state;
        }
    }
}
export default doctorReducer;