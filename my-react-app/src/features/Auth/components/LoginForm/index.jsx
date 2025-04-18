import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import { Box, Button, TextField, Typography, Paper,  Stack, Avatar,} from "@mui/material";
import LockOutlined from '@mui/icons-material/LockOutlined';


LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm({onSubmit}) {
    const [formData, setFormData] = useState({
        UserName:'',
        Password:'',
    });

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(onSubmit){
            onSubmit(formData)
            console.log("Dữ liệu đăng nhập:", formData);
        }
    }

    const handleChange = (event) =>{
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }
    return (
        <Box 
            component={Paper} elevation={0} className="login" maxWidth="sm"  sx={{ width: '80%' }}
            mx="auto"  mt={4}  borderRadius={3} p={4}>
            <Avatar className="login__avatar">
                 <LockOutlined className="login__lock" />
            </Avatar>
            <Typography variant="h5" align="center" gutterBottom>
                Đăng nhập
            </Typography>

            <form onSubmit={handleSubmit} className="login__form"> 
                <TextField label="Tên đăng nhập" name="userName" value={formData.UserName} 
                onChange={handleChange} required fullWidth/>
                <TextField label="Mật khẩu" name="password" type="password" value={formData.Password} 
                onChange={handleChange} required fullWidth  sx={{ mt: 2 }}/>
                <Button type='Submit' variant="contained" fullWidth  className="login__button">
                    Đăng nhập
                </Button>
            </form>
        </Box>
    );
}

export default LoginForm;