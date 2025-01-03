import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.example.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
    (config) => {
      // Add authorization token or modify headers
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  // Response interceptor
  axiosClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // Handle specific status codes
      if (error.response && error.response.status === 401) {
        // Redirect to login or refresh token
        console.error('Unauthorized. Redirecting to login.');
      }
      return Promise.reject(error);
    }
  );
  
  export default axiosClient;