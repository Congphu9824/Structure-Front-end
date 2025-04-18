// src/features/Auth/components/register/Register.jsx
import RegisterForm from "../Registerform";

const Register = () => {
  const handleRegister = (data) => {
    console.log("Gửi dữ liệu tới API:", data);
    // call API register tại đây nếu có
  };

  return (
    <div style={{ padding: "2rem" }}  >
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default Register;
