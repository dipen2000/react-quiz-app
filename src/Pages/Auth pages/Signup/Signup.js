import "../auth.css";
import { useState } from "react";
import { BatmanQuizContainer } from "../../../component/Wrapper/BatmanQuizContainer/BatmanQuizContainer";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { toast } from "react-hot-toast";

const Signup = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [signupInput, setSignupInput] = useState({});
  const { setIsAuth, signup } = useAuth();
  const navigate = useNavigate();

  const signInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignupInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const signupSubmitHandler = async (e) => {
    e.preventDefault();

    if (signupInput.password !== signupInput.confirmPassword) {
      return setError("Passwords don't match.");
    }

    try {
      setError("");
      setLoading(true);
      await signup(signupInput.email, signupInput.password);
      toast.success("Sign of successful!");
      setIsAuth(true);
      navigate("/");
    } catch (e) {
      setError("Signup failed!");
    }

    setLoading(false);
  };

  return (
    <BatmanQuizContainer>
      <div className="flex-row align-center-flex justify-center-flex">
        <div className="auth-form-container flex-col align-center-flex gap-1">
          <h2>Signup</h2>
          <form
            onSubmit={signupSubmitHandler}
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
                  onChange={signInputChangeHandler}
                  value={signupInput.email}
                  required
                />
              </div>
              <div className="flex-col gap-z-5">
                <label id="password">Password</label>
                <input
                  className="auth-input-box"
                  htmlFor="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password here."
                  onChange={signInputChangeHandler}
                  value={signupInput.password}
                  required
                />
              </div>
              <div className="flex-col gap-z-5">
                <label id="confirmPassword">Confirm Password</label>
                <input
                  className="auth-input-box"
                  htmlFor="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter your password here again."
                  onChange={signInputChangeHandler}
                  value={signupInput.confirmPassword}
                  required
                />
              </div>
            </div>
            <div className="flex-row align-center-flex justify-center-flex">
              <button className="primary-button" disabled={loading}>
                Sign up
              </button>
            </div>
            <div>
              Don't have an account?{" "}
              <Link className="link-clr" to="/login">
                Login
              </Link>
            </div>
          </form>
          {error && <div className="error-msg-container">{error}</div>}
        </div>
      </div>
    </BatmanQuizContainer>
  );
};

export { Signup };
