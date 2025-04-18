import axiosClient from "./axiosClient";

export const getUser = async () => {
  try {
    const response = await axiosClient.get("/User/GetUser");
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy user:", error);
    throw error;
  }
};
