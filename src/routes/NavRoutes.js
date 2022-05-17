import { Routes, Route } from "react-router-dom";
import { LandingPage, Quiz, ResultPage } from "../Pages";

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/category/:categoryName" element={<Quiz />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
};

export { NavRoutes };
