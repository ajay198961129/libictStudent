import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com", // Replace with your API's base URL
  headers: {
    "Content-Type": "application/json",
    // You can add other headers here
  },
});

// You can also add interceptors here if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
