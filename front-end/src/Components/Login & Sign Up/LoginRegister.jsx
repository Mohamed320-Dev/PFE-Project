import { useState } from "react";
import "./LoginRegister.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const LoginRegister = () => {
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Fill in all fields before proceeding!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/clients/login", {
        email,
        password
      });

      console.log("Response Data:", response.data); // Log response data

      if (response.status === 200) {
        toast.success("Login successful!");
        localStorage.setItem("token", response.data.token);
        window.location.href = "/dashboard";
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.error("Login Error:", error.response); // Log full error response

      if (error.response) {
        if (error.response.status === 401) {
          toast.error("Invalid email or password!");
        } else {
          toast.error("Something went wrong!!");
        }
      } else {
        toast.error("Server error. Please try again later.");
      }
    }
  };




  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("Fill in all fields before proceeding!");
      return;
    }

    try {
      await axios.post("http://localhost:8000/api/clients", { name, email, password });
      toast.success("User registered successfully!");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const errorMessage = error.response.data.errors?.email?.[0] || "Email already exists!";
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      } else {
        console.error("Error creating user:", error);
        toast.error("Something went wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      }
    }
  };


  return (
    <div className={`container ${isActive ? "active" : ""}`}>
      <div className="form-box login">
        <form onSubmit={handleSubmitLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <i className="bx bxs-envelope"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="forgot-link">
            <a href="#">Forgot password ?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <p>or login with social platforms</p>
          <div className="social-icons">
            <a href="#"><i className="bx bxl-google"></i></a>
            <a href="#"><i className="bx bxl-facebook"></i></a>
            <a href="#"><i className="bx bxl-github"></i></a>
            <a href="#"><i className="bx bxl-linkedin"></i></a>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form onSubmit={handleSubmitRegister}>
          <h1>Registration</h1>
          <div className="input-box">
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Username" />
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box">
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
            <i className="bx bxs-envelope"></i>
          </div>

          <div className="input-box">
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            <i className="bx bxs-lock-alt"></i>
          </div>

          <button type="submit" className="btn">
            Register
          </button>
          <p>or register with social platforms</p>
          <div className="social-icons">
            <a href="#"><i className="bx bxl-google"></i></a>
            <a href="#"><i className="bx bxl-facebook"></i></a>
            <a href="#"><i className="bx bxl-github"></i></a>
            <a href="#"><i className="bx bxl-linkedin"></i></a>
          </div>
        </form>
      </div>

      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Hello, Welcome!</h1>
          <p>Don't have an account?</p>
          <button className="btn register-btn" onClick={() => setIsActive(true)}>
            Register
          </button>
        </div>

        <div className="toggle-panel toggle-right">
          <h1>Welcome Back!</h1>
          <p>Already have an account?</p>
          <button className="btn login-btn" onClick={() => setIsActive(false)}>
            Login
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginRegister;
