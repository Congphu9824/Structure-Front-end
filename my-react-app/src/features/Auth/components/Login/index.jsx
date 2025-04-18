import React from 'react';
import LoginForm from '../LoginForm';


function Login() {
    const handleLogin = (formData) =>{
        console.log("Xử lý đăng nhập:", formData);
    }
    return (
        <div style={{ padding: "2rem" }}>
            <LoginForm onSubmit={handleLogin}/>
        </div>
    );
}

export default Login;