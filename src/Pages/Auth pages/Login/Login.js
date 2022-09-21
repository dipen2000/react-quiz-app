import "../auth.css";
import { useState } from "react";
import { BatmanQuizContainer } from "../../../component/Wrapper/BatmanQuizContainer/BatmanQuizContainer";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { toast } from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginInput, setLoginInput] = useState({});
  const { setIsAuth, login } = useAuth();
  const navigate = useNavigate();

  const loginInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const loginSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(loginInput.email, loginInput.password);
      toast.success("Login successful!");
      setIsAuth(true);
      navigate("/");
    } catch (e) {
      setError("Failed to login.");
    }
    setLoading(false);
  };
  return (
    <BatmanQuizContainer>
      <div className="flex-row align-center-flex justify-center-flex">
        <div className="auth-form-container flex-col align-center-flex gap-1">
          <h2>Login</h2>
          <form
            onSubmit={loginSubmitHandler}
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
                  onChange={loginInputChangeHandler}
                  value={loginInput.email}
                  required
                />
              </div>
              <div className="flex-col  gap-z-5">
                <label id="password">Password</label>
                <input
                  className="auth-input-box"
                  htmlFor="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password here."
                  onChange={loginInputChangeHandler}
                  value={loginInput.password}
                  required
                />
              </div>
              <div>
                <Link className="link-clr underline" to="/forget-password">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="flex-row align-center-flex justify-center-flex">
              <button className="primary-button" disabled={loading}>
                Login
              </button>
            </div>
            <div>
              Don't have an account?{" "}
              <Link className="link-clr" to="/signup">
                Signup
              </Link>
            </div>
          </form>
          {error && <div className="error-msg-container">{error}</div>}
        </div>
      </div>
    </BatmanQuizContainer>
  );
};

export { Login };
