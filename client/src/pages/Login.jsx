import { useState } from "react";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import Input from "../components/Input";
import Button from "../components/Button";

function Login() {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setMessage("Email and password are required");
      return;
    }

    try {
      const response = await loginUser(formData);

      login(response.data);

      setMessage("Login successful!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };
  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />

        <Button type="submit">Login</Button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
