import "./Auth.css";
import { MdOutlinePersonOutline } from "react-icons/md";
import { LiaIndustrySolid } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import { MdOutlineAccountBalance } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../../DAL/auth";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    fleetSize: "",
    password: "",
    // confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    // if (formData.password !== formData.confirmPassword) {
    //   return;
    // }

    try {
      setLoading(true);

      const res = await register(formData);

      if (res.status === 201) {
        toast.success(res?.message || "Form submitted successfully");
        setErrors({});
        navigate("/verify", { state: { email: formData.email } });
        setFormData({
          companyName: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "",
          fleetSize: "",
          password: "",
          // confirmPassword: "",
        });
      } else if (res?.status === 400) {
        const fieldErrors = {};
        res.missingFields.forEach((field) => {
          fieldErrors[field.name] = field.message;
        });
        setErrors(fieldErrors);
      }
    } catch (err) {
      if (err.response?.status === 400 && err.response.data?.missingFields) {
        const fieldErrors = {};
        err.response.data.missingFields.forEach((field) => {
          fieldErrors[field.name] = field.message;
        });
        setErrors(fieldErrors);
      } else {
        toast.error("Submission failed. Please try again.");
      }
    }
  };

  return (
    <div className="AuthPage">
      <div className="AuthPage-Right">
        <h2>Hello, Friends</h2>
        <p>Enter your personal details</p>
        <p>and strat journy with us.</p>
        <div className="AuthPage-Right-btn" onClick={() => navigate("/login")}>
          Already Have An Account
        </div>
      </div>

      <div className="AuthPage-Left">
        <p className="AuthPage-Left-H">Register to Taxi Limo</p>

        <form className="register-form">
          {/* Company Name */}
          <div className="field-group">
            {errors.companyName && (
              <span className="error-msg">{errors.companyName}</span>
            )}
            <div className="inputs-area2">
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

          {/* First & Last Name */}
          <div className="row two">
            <div className="field-group">
              {errors.firstName && (
                <span className="error-msg">{errors.firstName}</span>
              )}
              <div className="inputs-area2">
                <MdOutlinePersonOutline />
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                />
              </div>
            </div>

            <div className="field-group">
              {errors.lastName && (
                <span className="error-msg">{errors.lastName}</span>
              )}
              <div className="inputs-area2">
                <MdOutlinePersonOutline />
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="field-group">
            {errors.email && <span className="error-msg">{errors.email}</span>}
            <div className="inputs-area2">
              <MdOutlineEmail />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
           {/* Passwords */}
          <div className="row two">
            <div className="field-group">
              {errors.password && (
                <span className="error-msg">{errors.password}</span>
              )}
              <div className="inputs-area2">
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
{/* 
            <div className="field-group">
              {errors.confirmPassword && (
                <span className="error-msg">{errors.confirmPassword}</span>
              )}
              <div className="inputs-area2">
                <TbLockPassword />
                <input
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
            </div> */}
          </div>

          {/* Phone */}
          <div className="field-group">
            {errors.phone && <span className="error-msg">{errors.phone}</span>}
            <div className="inputs-area2">
              <FiPhone />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="text"
                placeholder="Phone"
              />
            </div>
          </div>

          {/* Country & Fleet */}
          <div className="row two">
            <div className="field-group">
              {errors.country && (
                <span className="error-msg">{errors.country}</span>
              )}
              <div className="inputs-area2">
                <MdOutlineAccountBalance />
                <input
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  type="text"
                  placeholder="Country"
                />
              </div>
            </div>

            <div className="field-group">
              {errors.fleetSize && (
                <span className="error-msg">{errors.fleetSize}</span>
              )}
              <select
                name="fleetSize"
                value={formData.fleetSize}
                onChange={handleChange}
              >
                <option value="">Fleet Size</option>
                <option>1-5</option>
                <option>6-10</option>
                <option>10-50</option>
              </select>
            </div>
          </div>

         
        </form>

        <button
          className="AuthPage-Submit-button"
          onClick={handleRegister}
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </div>
    </div>
  );
};

export default Register;
