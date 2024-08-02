import axios from "axios";
const url = import.meta.env.VITE_APP_BASE_URL;

export const axiosInstance = axios.create({
    baseURL:url
})

axiosInstance.interceptors.request.use(async (request) => {
    return request
})

// instance.interceptors.response.use(async (response) => {
//     if (response.data.isSuccess == false) {
//     }
// })

