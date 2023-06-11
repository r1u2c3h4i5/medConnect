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

