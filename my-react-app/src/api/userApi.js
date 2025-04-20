import axiosClient from "./axiosClient";

const ApiUser = {
  // API lấy thông tin người dùng
  getUser: () =>
    axiosClient
      .get("/User/GetUser")
      .then((res) => res.data)
      .catch((error) => {
        console.error("Lỗi khi lấy user:", error);
        throw error;
      }),

  // API đăng ký người dùng
  RegisterUser: (userData) =>
    axiosClient
      .post("/User/register", userData) // Gửi dữ liệu userData lên server
      .then((res) => res.data)
      .catch((error) => {
        console.error("Lỗi khi đăng ký user:", error);
        throw error;
      }),
  LoginUser: (userData) =>
    axiosClient
      .post("/User/login", userData)
      .then((res) => res.data)
      .catch((error) => {
        console.error("Lỗi khi đăng ký user:", error);
        throw error;
      }),
  LogOut: (userData) =>
    axiosClient
      .post("/User/logout", userData)
      .then((res) => res.data)
      .catch((error) => {
        console.error("Lỗi khi đăng ký user:", error);
        throw error;
      }),
};

export default ApiUser;
