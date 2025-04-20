import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://localhost:7148/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, //  để gửi cookie
});

// Thêm interceptor để xử lý response
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Xử lý refresh token khi hết hạn
      // Có thể thêm logic tự động refresh token ở đây
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
