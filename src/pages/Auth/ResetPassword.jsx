import React, { useEffect, useState } from "react";
import "./Auth.css";
import { TbLockPassword } from "react-icons/tb";
import { MdManageAccounts } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { forgotPassword, resetPassword } from "../../DAL/auth";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const location = useLocation();
  const email = location.state?.email;
  const navigate = useNavigate();

  //  Block direct access
  useEffect(() => {
    if (!email) navigate("/forgot-password", { replace: true });
  }, [email, navigate]);

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
    otp: "",
    email: email,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ------------------------------
  // HANDLE INPUT CHANGES
  // ------------------------------
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  // ------------------------------
  // RESET PASSWORD API CALL
  // ------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrors({});

    try {
      const res = await resetPassword(formData);

      if (res.status === 200) {
        toast.success(res.message || "Password reset successfully!");
        navigate("/login");
      } else if (res.status === 400 && res.missingFields) {
        const fieldErrors = {};
        res.missingFields.forEach((field) => {
          fieldErrors[field.name] = field.message;
        });
        setErrors(fieldErrors);
      } else {
        toast.error(res.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  // ------------------------------
  // RESEND OTP API CALL
  // ------------------------------
  const handleResendOTP = async () => {
    try {
      toast.info("Sending OTP...");
      const res = await forgotPassword({ email });

      if (res.status === 200) {
        toast.success("OTP sent again!");
      } else {
        toast.error(res.message || "Failed to resend OTP");
      }
    } catch (err) {
      toast.error("Failed to resend OTP");
    }
  };

  return (
    <div className="AuthPage">
      <div className="AuthPage-Left">
        <form className="reset-form">
          <p className="AuthPage-Left-H">Create New Password</p>

          {/* NEW PASSWORD */}
          <div className="field-group">
            {errors.newPassword && (
              <span className="error-msg">{errors.newPassword}</span>
            )}
            <div className="inputs-area">
              <TbLockPassword />
              <input
                name="newPassword"
                type="password"
                placeholder="New Password"
                value={formData.newPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="field-group">
            {errors.confirmPassword && (
              <span className="error-msg">{errors.confirmPassword}</span>
            )}
            <div className="inputs-area">
              <TbLockPassword />
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* OTP */}
          <div className="field-group">
            {errors.otp && <span className="error-msg">{errors.otp}</span>}
            <div className="inputs-area">
              <MdManageAccounts />
              <input
                name="otp"
                type="text"
                placeholder="OTP"
                value={formData.otp}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* RESEND OTP TEXT */}
          <div
            className="forget"
            style={{ cursor: "pointer", marginTop: "6px" }}
            onClick={handleResendOTP}
          >
            Resend OTP
          </div>

          <button
            className="AuthPage-Submit-button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Please wait..." : "Create Password"}
          </button>
        </form>
      </div>

      <div className="AuthPage-Right">
        <h2>Hello, Friends</h2>
        <p>Enter your personal details</p>
        <p>and strat journy with us.</p>
        <div className="AuthPage-Right-btn" onClick={() => navigate("/login")}>
          Return To Login
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
