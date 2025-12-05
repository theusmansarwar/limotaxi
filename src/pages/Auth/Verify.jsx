import "./Auth.css";
import { MdManageAccounts } from "react-icons/md";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verify } from "../../DAL/auth";

const Verify = () => {
  const [formData, setFormData] = useState({ otp: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  // 🔐 Block direct access
  useEffect(() => {
    if (!email) navigate("/register", { replace: true });
  }, [email, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, otp: e.target.value });
    setErrors({});
  };

  const handleVerify = async () => {
    try {
      setLoading(true);

      const res = await verify({
        email,
        otp: formData.otp,
      });
      if (res?.status === 200) {
        navigate("/login", { replace: true });
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
        setErrors({ otp: "OTP verification failed" });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="AuthPage">
      <div className="AuthPage-Left">
        <form className="verify-form">
          <p className="AuthPage-Left-H">Verify Your Account</p>
          {errors.otp && <span className="error-msg">{errors.otp}</span>}
          <div className="inputs-area">
            <MdManageAccounts />
            <input
              type="text"
              name="otp"
              placeholder="OTP"
              value={formData.otp}
              onChange={handleChange}
            />
          </div>

          <div className="forget">Resend OTP</div>

          <button
            className="AuthPage-Submit-button"
            onClick={handleVerify}
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      </div>

      <div className="AuthPage-Right">
        <p>Hello, Friends</p>
        <p>Enter your personal details</p>
        <p>and strat journy with us.</p>

        <div
          className="AuthPage-Right-btn"
          onClick={() => navigate("/register")}
        >
          Back to Register
        </div>
      </div>
    </div>
  );
};

export default Verify;
