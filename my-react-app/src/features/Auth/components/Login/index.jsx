import React, { useState } from 'react';
import LoginForm from '../LoginForm';
import { useSnackbar } from 'notistack';
import ApiUser from '../../../../api/userApi';

function Login({ onSubmit }) {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (formData) => {
    setLoading(true);
    try {
      const loginData = {
        UserName: formData.UserName,
        Password: formData.Password,
      };

      const response = await ApiUser.LoginUser(loginData);
      console.log('Phản hồi từ server:', response);
      
      // Lưu thông tin user vào state/localStorage
      localStorage.setItem('user', JSON.stringify(response.User));

      enqueueSnackbar('Đăng nhập thành công!', { variant: 'success', autoHideDuration: 2000, });

      // Gọi callback onSubmit từ Header để cập nhật giao diện
      if (onSubmit) {
        onSubmit(response);
      }
    } catch (error) {
      // Hiển thị thông báo lỗi
      const errorMessage = error.response?.data?.message || 'Đăng nhập thất bại';
      enqueueSnackbar(errorMessage, { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <LoginForm onSubmit={handleLogin} loading={loading} />
    </div>
  );
}

export default Login;