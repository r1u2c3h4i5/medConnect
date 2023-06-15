import axios from "axios";


export const patientSignUpApiCall = async (params, restApiUrl) => {
    try{
        const response = await axios({
            method: "post",
            url: `${restApiUrl}/user/patientRegister`,
            data: params
        })
        return response.data;
    } catch(error){
        console.log('inside userApi userSignUpApiCall', error);
        throw error;
    }
}