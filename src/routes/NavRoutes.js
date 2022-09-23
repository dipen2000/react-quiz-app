import { Routes, Route } from "react-router-dom";
import { LandingPage, Quiz, ResultPage } from "../Pages";
import { Login } from "../Pages/Auth pages/Login/Login";
import { Signup } from "../Pages/Auth pages/Signup/Signup";
import { ForgotPassword } from "../Pages/Auth pages/ForgotPassword/ForgotPassword";
import { Logout } from "../Pages/Auth pages/Logout/Logout";
import { RequiresAuth } from "./RequiresAuth";
import { PrivateRoutes } from "./PrivateRoutes";

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget-password" element={<ForgotPassword />} />
      <Route path="/logout" element={<Logout />} />
      <Route element={<PrivateRoutes />}>
        <Route
          path="/quiz/category/:categoryName/question/:questionNum"
          element={<Quiz />}
        />
        <Route path="/result" element={<ResultPage />} />
      </Route>
    </Routes>
  );
};

export { NavRoutes };
