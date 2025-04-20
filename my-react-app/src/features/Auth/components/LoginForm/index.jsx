import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Box, Button, TextField, Typography, Paper, Stack, Avatar, InputAdornment, IconButton } from '@mui/material';
import LockOutlined from '@mui/icons-material/LockOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import { Visibility, VisibilityOff } from '@mui/icons-material';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
};

function LoginForm({ onSubmit, loading }) {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    UserName: '',
    Password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
      console.log('Dữ liệu đăng nhập:', formData.UserName);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const togglePasswordVisibility = () =>{
    setShowPassword((prev) => !prev);// Đổi trạng thái hiển thị mật khẩu
  }
  return (
    <Box
      component={Paper}
      elevation={0}
      className="login"
      maxWidth="sm"
      sx={{ width: '85%' }}
      mx="auto"
      mt={4}
      borderRadius={3}
      p={0}
    >
      <Avatar className="login__avatar">
        <LockOutlined className="login__lock" />
      </Avatar>
      <Typography variant="h5" align="center" gutterBottom>
        Đăng nhập
      </Typography>

      <form onSubmit={handleSubmit} className="login__form">
        <TextField
          label="Tên đăng nhập"
          name="UserName"
          value={formData.UserName}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Mật khẩu"
          name="Password"
          // = true showpassword dưới dạng text - false: ẩn dạng .
          type={showPassword ? 'text' : 'password'}
          onChange={handleChange}
          fullWidth
          sx={{ mt: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                   {/* true = VisibilityOff mắt gạch sẽ show */}
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          className="login__button"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Đăng nhập'}
        </Button>
      </form>
    </Box>
  );
}

export default LoginForm;