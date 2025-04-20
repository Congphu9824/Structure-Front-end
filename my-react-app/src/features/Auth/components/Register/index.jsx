// src/features/Auth/components/register/Register.jsx
import { useState } from "react";
import RegisterForm from "../Registerform";
import { useSnackbar } from 'notistack';
import ApiUser from "../../../../api/userApi";

const Register = ({onSuccess}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

const handleRegister = async (data) => {
  try {
    setLoading(true);
    const payload = {
      ...data,
      dateOfBirth: new Date(data.dateOfBirth).toISOString(),
    };
    const response = await ApiUser.RegisterUser(payload);
    console.log("Phản hồi từ server:", response);

   enqueueSnackbar('Đăng ký thành công!', { variant: 'success', autoHideDuration: 2000, });


    if(onSuccess) onSuccess();
  } catch (error) {
    console.error("Lỗi khi đăng ký:", error.response?.data || error.message);
    } finally {
    setLoading(false);
  }
};
  return (
    <div style={{ padding: "2rem" }}>
      <RegisterForm onSubmit={handleRegister} loading={loading} />
    </div>
  );
};

export default Register;