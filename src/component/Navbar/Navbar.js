import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, logOut, setIsAuth, setCurrentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const logoutHandler = async () => {
    try {
      setError("");
      setLoading(true);
      await logOut();
      setCurrentUser({});
      setIsAuth(false);
      navigate("/logout");
    } catch (e) {
      setError("Failed to logout.");
    }
    setLoading(false);
  };

  return (
    <header className="navbar-sticky">
      <nav className="navbar">
        <h2
          onClick={() => {
            navigate("/");
            sessionStorage.removeItem("timer");
            sessionStorage.removeItem("answers");
          }}
          className="curs-point navbar-heading"
        >
          Batman Quiz
        </h2>
        {Object.keys(currentUser).length === 0 ? (
          <button className="primary-button" onClick={() => navigate("/login")}>
            Login
          </button>
        ) : (
          <button
            className="primary-button"
            onClick={logoutHandler}
            disabled={loading}
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export { Navbar };
