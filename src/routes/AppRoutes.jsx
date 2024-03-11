import { Navigate, useLocation } from "react-router-dom";
function ProtectedRoute({ children }) {
  const { isAuthenticated } = true;
  const location = useLocation();

  if (isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
export default ProtectedRoute;
