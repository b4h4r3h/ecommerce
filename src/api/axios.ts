import axios from "axios";
const url = import.meta.env.VITE_APP_BASE_URL;

export const axiosInstance = axios.create({
    baseURL:url
})

// https://medium.com/@barisberkemalkoc/axios-interceptor-intelligent-db46653b7303
// https://sarathadhithya.medium.com/optimizing-api-requests-with-axios-interceptors-and-advanced-error-handling-3f69b1e05868

axiosInstance.interceptors.request.use(async (request) => {
    return request
})

axiosInstance.interceptors.response.use(async (response) => {
    //TODO
    console.log("response",response)
    // if (response.data.isSuccess == false) {
    // }
})

