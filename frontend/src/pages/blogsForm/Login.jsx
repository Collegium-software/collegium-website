import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorLogin, setErrorLogin] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("Login Form data: ", formData);
      if (response.ok) {
        console.log("Log in successful");
        navigate("/blogs-forms");
      } else {
        console.log("Login failed");
        setErrorLogin(true);
      }
    } catch (error) {
      console.error("Error during login ", error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="login-form-section">
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <h4>Login to your account</h4>
          <label htmlFor="login-username">
            Username:
            <br />
            <input
              type="email"
              id="login-username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="login-password">
            Password:
            <br />
            <input
              type="password"
              id="login-password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <button className="login-button" type="submit">
            Login
          </button>
          {errorLogin && (
            <div className="error-msg">
              <p>Wrong username and/or password, try again!</p>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;
