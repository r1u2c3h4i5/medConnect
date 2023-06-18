import axios from "axios"

export const getUserLogInApiCall = async(params, restApiUrl) => {
    try{
        const response = await axios({
            method: 'post',
            url: `${restApiUrl}/user/login`,
            data: params
        })
        localStorage.setItem('token', response.data.token);
        return response.data;
    } catch(error){
        console.log('inside userApi -> getUserLogInApiCall', error);
        throw error;
    }
}