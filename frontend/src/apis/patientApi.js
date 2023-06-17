import axios from "axios";


export const patientSignUpApiCall = async (params, restApiUrl) => {
    try{
        const response = await axios({
            method: "post",
            url: `${restApiUrl}/patient/patientRegister`,
            data: params
        })
        localStorage.setItem('token', response.data.token);
        return response.data;
    } catch(error){
        console.log('inside patientApi patientSignUpApiCall', error);
        throw error;
    }
}