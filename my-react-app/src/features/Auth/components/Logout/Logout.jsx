import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiUser from "../../../../api/userApi";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const doLogout = async () => {
      try {
        // Gửi yêu cầu logout đến API
        await ApiUser.LogOut();

        // Chuyển hướng về trang chủ
        navigate("/");
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    doLogout();
  }, [navigate]);

  return <div>Đang đăng xuất...</div>;
}

export default Logout;
