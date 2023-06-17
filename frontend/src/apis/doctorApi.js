import axios from 'axios';

export const getDoctorListApiCall = async(restApiUrl) => {
    try {
        // console.log(restApiUrl, "api");
        const response = await axios({
            method: 'get',
            url:  `${restApiUrl}/doctor/getAllDoctor`
        });
        // console.log(response.data, "api");
        return response.data;
    } catch (error) {
        if(error.response.status === 401){
            return error.response.data;
        }
        throw error;
    }

}

export const doctorSignUpApiCall = async (params, restApiUrl) => {
    try{
        const response = await axios({
            method: "post",
            url: `${restApiUrl}/doctor/register`,
            data: params
        })
        localStorage.setItem('token', response.data.token);
        return response.data;
    } catch(error){
        console.log('inside doctor doctorSignUpApiCall', error);
        throw error;
    }
}
