import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoutes = () => {
  const { currentUser } = useAuth();
  return Object.keys(currentUser).length === 0 ? (
    <Navigate to="/login" replace />
  ) : (
    <Outlet />
  );
};

export { PrivateRoutes };
