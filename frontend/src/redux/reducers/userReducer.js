import { GET_USER_SIGN_IN_FAILED, GET_USER_SIGN_IN_SUCCESS } from "../actions/actionConstants";

 const userReducer = (state= {}, action) => {
    switch(action.type){
        case GET_USER_SIGN_IN_SUCCESS: {
            return {
                ...state,
                signIn: action.payload.signInObj 
            }
        }
        case GET_USER_SIGN_IN_FAILED: {
            return {
                ...state,
                error: action.payload.errorMessage
            }
        }
        default: {
            return state;
       }
    }
}

export default userReducer;