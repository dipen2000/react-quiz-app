import "./Navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="navbar-sticky">
      <nav className="navbar flex-row align-center-flex justify-space-between-flex">
        <h2 onClick={() => navigate("/")} className="curs-point">
          Batman Quiz
        </h2>
        <button>toggle theme</button>
      </nav>
    </header>
  );
};

export { Navbar };
