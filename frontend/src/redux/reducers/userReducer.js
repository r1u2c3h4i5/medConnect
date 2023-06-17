import { getUserSignInFailed, getUserSignInSuccess } from "../actions/userAction";

 const userReducer = (state= {}, action) => {
    switch(action.type){
        case getUserSignInSuccess: {
            return {
                ...state,
                signIn: action.payload.signInObj 
            }
        }
        case getUserSignInFailed: {
            return {
                ...state,
                error: action.payload.errorMessage
            }
        }
    }
}

export default userReducer;