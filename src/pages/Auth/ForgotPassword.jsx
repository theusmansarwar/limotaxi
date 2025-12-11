import "./Auth.css";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../DAL/auth";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ email: e.target.value });
    setErrors({});
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const res = await forgotPassword(formData);

      if (res?.status === 200) {
        navigate("/reset-password", { state: { email: formData.email } });
      } else if (res?.status === 400 && res?.missingFields) {
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
        setErrors({ email: "Failed to send OTP" });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="AuthPage">
      <div className="AuthPage-Right">
        <h2>Hello, Friends</h2>
        <p>Enter your personal details</p>
        <p>and strat journy with us.</p>

        <div className="AuthPage-Right-btn" onClick={() => navigate("/login")}>
          Back to Login
        </div>
      </div>

      <div className="AuthPage-Left">
        <form className="forgot-form">
          <p className="AuthPage-Left-H">Forgot Password?</p>

          {errors.email && <span className="error-msg">{errors.email}</span>}
          <div className="inputs-area">
            <MdOutlineEmail />
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <button
            className="AuthPage-Submit-button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send OTP"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
