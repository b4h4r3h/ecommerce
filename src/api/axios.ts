import axios from "axios";
const url = import.meta.env.VITE_APP_BASE_URL;

export const axiosInstance = axios.create({
    baseURL:url
})

// https://medium.com/@barisberkemalkoc/axios-interceptor-intelligent-db46653b7303

axiosInstance.interceptors.request.use(async (request) => {
    return request
})

axiosInstance.interceptors.response.use(async (response) => {
    //TODO
    console.log("response",response)
    // if (response.data.isSuccess == false) {
    // }
})

