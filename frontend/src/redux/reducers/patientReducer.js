const {  GET_PATIENT_SIGN_UP_SUCCESS, GET_PATIENT_SIGN_UP_FAILED } = require("../actions/actionConstants")

const patientReducer = (state= {}, action) => {
    switch(action.type){
        case GET_PATIENT_SIGN_UP_SUCCESS:{
            return {
                ...state,
                patientSignUp: action.payload.patientSignUpObj
            }
        }
       case GET_PATIENT_SIGN_UP_FAILED:{
        return{
            ...state,
            errorMessage: action.payload.error
        }
       }
       default: {
            return state;
       }
    }
}

export default patientReducer;