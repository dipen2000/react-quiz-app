import "../auth.css";
import { useState } from "react";
import { BatmanQuizContainer } from "../../../component/Wrapper/BatmanQuizContainer/BatmanQuizContainer";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const ForgotPassword = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [resetPasswordInput, setResetPasswordInput] = useState({});
  const { resetPassword } = useAuth();

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await resetPassword(resetPasswordInput.email);
      setMessage("The reset password mail has been sent.");
    } catch (e) {
      setError("Failed to send the reset email.");
    }

    setLoading(false);
  };

  const resetPasswordInputChangeHolder = (e) => {
    const { name, value } = e.target;
    setResetPasswordInput((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <BatmanQuizContainer>
      <div className="flex-row align-center-flex justify-center-flex">
        <div className="auth-form-container flex-col align-center-flex gap-1">
          <h2>Reset Password</h2>
          <form
            onSubmit={resetPasswordHandler}
            className="flex-col align-center-flex gap-1"
          >
            <div className="flex-col gap-1">
              <div className="flex-col gap-z-5">
                <label id="email">Email</label>
                <input
                  className="auth-input-box"
                  htmlFor="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email here."
                  onChange={resetPasswordInputChangeHolder}
                  value={resetPasswordInput.email}
                  required
                />
              </div>
            </div>
            <div className="flex-row align-center-flex justify-center-flex">
              <button className="primary-button" disabled={loading}>
                Reset password
              </button>
            </div>
            <Link className="link-clr" to="/login">
              Login
            </Link>
            <div>
              Don't have an account?{" "}
              <Link className="link-clr" to="/signup">
                Signup
              </Link>
            </div>
          </form>
          {error && <div className="error-msg-container">{error}</div>}
          {message && (
            <div className="error-msg-container reset-mail-msg">{message}</div>
          )}
        </div>
      </div>
    </BatmanQuizContainer>
  );
};

export { ForgotPassword };
