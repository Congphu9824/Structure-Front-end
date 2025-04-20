// src/features/Auth/components/register/RegisterForm.jsx
import { useState } from "react";
import { Box, Button, TextField, Typography, Paper,  Stack, Avatar, InputAdornment, IconButton,} from "@mui/material";
import LockOutlined from '@mui/icons-material/LockOutlined';

import "./style.scss"
import { Visibility, VisibilityOff } from "@mui/icons-material";

const RegisterForm = ({ onSubmit }) => {
  const [Showpassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    phoneNumber: "", 
    dateOfBirth: "", 
    status: true, 
  });
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
      if (onSubmit) onSubmit(formData);
      console.log("Dữ liệu đăng ký:", formData);
  };

  const togglePasswordVisibility = () =>{
     setShowPassword((prev) => !prev)
  }

  return (
    <Box
     //elevation={3} là box-shadow
      component={Paper} elevation={0} p={4} maxWidth="sm"   sx={{ width: '80%' }}
      mx="auto" mt={4} borderRadius={3} className="register">
        <Avatar className="register__avatar">
            <LockOutlined className='register__lock' />
        </Avatar> 

       <Typography variant="h5" gutterBottom align="center">
        Đăng ký tài khoản
       </Typography>

      <form onSubmit={handleSubmit} >
        <Stack spacing={3}>
          <TextField
            label="Họ và tên" name="fullName" value={formData.fullName}
            onChange={handleChange} required fullWidth />

          <TextField
            label="Tên đăng nhập" name="userName" value={formData.userName}
            onChange={handleChange} required fullWidth />

          <TextField
            label="Email" type="email" name="email" value={formData.email}
            onChange={handleChange} required fullWidth />

          <TextField
            label="Mật khẩu" type={Showpassword ? 'text' : 'password'} name="password" value={formData.password}
            onChange={handleChange} required fullWidth
            InputProps={{
              endAdornment:(
                <InputAdornment  position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                      {Showpassword ? <VisibilityOff/> : <Visibility/>}
                  </IconButton>
                </InputAdornment>
              )
            }} />

          <TextField
            label="Số điện thoại" type="tel"   name="phoneNumber" value={formData.phoneNumber}
            onChange={handleChange} required  fullWidth />

          <TextField
            label="Ngày sinh" type="date" name="dateOfBirth" value={formData.dateOfBirth}
            onChange={handleChange} required  fullWidth  
             InputLabelProps={{
              shrink: true, // để label không đè lên input type date
            }}/>

          <Button variant="contained" color="primary" type="submit">
            Đăng ký
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default RegisterForm;
