import { Routes, Route } from "react-router-dom";
import { LandingPage, Quiz } from "../Pages";

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/category/:categoryName" element={<Quiz />} />
    </Routes>
  );
};

export { NavRoutes };
