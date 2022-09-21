import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
const RequiresAuth = ({ children }) => {
  const { currentUser } = useAuth();
  return Object.keys(currentUser).length === 0 ? (
    <Navigate to="/login" replace />
  ) : (
    children
  );
};

export { RequiresAuth };
