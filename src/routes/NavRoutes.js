import { Routes, Route } from "react-router-dom";
import { LandingPage, Quiz, ResultPage } from "../Pages";
import { Login } from "../Pages/Auth pages/Login/Login";
import { Signup } from "../Pages/Auth pages/Signup/Signup";
import { ForgotPassword } from "../Pages/Auth pages/ForgotPassword/ForgotPassword";
import { Logout } from "../Pages/Auth pages/Logout/Logout";
import { RequiresAuth } from "./RequiresAuth";

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget-password" element={<ForgotPassword />} />
      <Route path="/logout" element={<Logout />} />
      <Route
        path="/quiz/category/:categoryName/question/:questionNum"
        element={
          <RequiresAuth>
            <Quiz />
          </RequiresAuth>
        }
      />
      <Route
        path="/result"
        element={
          <RequiresAuth>
            <ResultPage />
          </RequiresAuth>
        }
      />
    </Routes>
  );
};

export { NavRoutes };
