import axios from "axios";

const url = import.meta.env.VITE_APP_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: url,
});

// https://medium.com/@barisberkemalkoc/axios-interceptor-intelligent-db46653b7303
// https://sarathadhithya.medium.com/optimizing-api-requests-with-axios-interceptors-and-advanced-error-handling-3f69b1e05868

axiosInstance.interceptors.request.use(async (request) => {
  return request;
});

// axiosInstance.interceptors.response.use(async (response) => {
//   const data = response?.data;
//   if (data?.message && typeof data?.message === "string") {
//     alert(data.message);
//   } else if (data?.status && typeof data?.status === "string") {
//     alert(data.status + ` - Status code: ${data.code}`);
//   }
// //   return data.data;
// (error) => {
//     const data = error.response.data;

//     if (data?.message && typeof data?.message === 'string') {
//       alert(data.message);
//     } else if (data?.status && typeof data?.status === 'string') {
//       alert(data.status + ` - Status code: ${data.code}`);
//     }

//     return Promise.reject(data);
//   }
// });

axios.interceptors.response.use(
    response => response,
    error => {
      const status = error.response ? error.response.status : null;
        
      if (status === 401) {
        // Handle unauthorized access
        console.log("Unauthorized access");
      } else if (status === 404) {
        // Handle not found errors
        console.log("Post not found");
      } else {
        // Handle other errors
        console.error("An error occurred:", error);
      }
      
      return Promise.reject(error);
    }
  );