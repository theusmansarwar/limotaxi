import React, { useState } from "react";
import "./Auth.css";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { LiaIndustrySolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { login } from "../../DAL/auth";
import { toast } from "react-toastify";

const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  const [role, setRole] = useState("owner");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    role: "owner",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      setErrors({});

      const payload = {
        ...formData,
        role,
      };

      const res = await login(payload);

      if (res.status === 200) {
        toast.success(res.message || "Login successful");
        localStorage.setItem("token", res.token);
        onLoginSuccess?.();
      } else if (res.status === 400 && res.missingFields) {
        const fieldErrors = {};
        res.missingFields.forEach((field) => {
          fieldErrors[field.name] = field.message;
        });
        setErrors(fieldErrors);
      } else {
        toast.error(res.message || "Invalid credentials");
      }
    } catch (err) {
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="AuthPage">
      <div className="AuthPage-Left">
        <form className="login-form">
          <h2 className="AuthPage-Left-H">Sign in to Taxi Limo</h2>

          <div className="OwnerDispatch">
            <div
              className={`owner ${role === "owner" ? "active-admin" : ""}`}
              onClick={() => {
                setRole("owner");
                setFormData({ ...formData, role: "owner" });
              }}
            >
              Owner
            </div>

            <div
              className={`dispatch ${
                role === "dispatch" ? "active-admin" : ""
              }`}
              onClick={() => {
                setRole("dispatch");
                setFormData({ ...formData, role: "dispatch" });
              }}
            >
              Dispatch
            </div>
          </div>

          {/* Company Name (Only for Dispatch) */}
          {role === "dispatch" && (
            <div className="field-group">
              {errors.companyName && (
                <span className="error-msg">{errors.companyName}</span>
              )}
              <div className="inputs-area">
                <LiaIndustrySolid />
                <input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Company Name"
                />
              </div>
            </div>
          )}

          {/* Email */}
          <div className="field-group">
            {errors.email && <span className="error-msg">{errors.email}</span>}
            <div className="inputs-area">
              <MdOutlineEmail />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="text"
                placeholder="Email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="field-group">
            {errors.password && (
              <span className="error-msg">{errors.password}</span>
            )}
            <div className="inputs-area">
              <TbLockPassword />
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                placeholder="Password"
              />
            </div>
          </div>

          <div
            className="forget"
            onClick={() => {
              navigate("/forgot-password");
            }}
          >
            Forget your Password?
          </div>

          <button
            className="AuthPage-Submit-button"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>

      <div className="AuthPage-Right">
        <h2>Hello, Friends</h2>
        <p>Enter your personal details</p>
        <p>and strat journy with us.</p>
        <button
          className="AuthPage-Right-btn"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
