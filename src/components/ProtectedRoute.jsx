import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

/**
 * ProtectedRoute ensures that only logged-in users (and optionally with specific roles)
 * can access a route.
 *
 * @param {ReactNode} children - The component to render when allowed.
 * @param {Array<string>} roles - Optional array of allowed roles.
 */
function ProtectedRoute({ children, roles }) {
  const { token, role } = useAuth();

  // 🚫 If no token, user isn't logged in
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // 🚫 If roles are specified and user's role not included
  if (roles && !roles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  // ✅ Otherwise, allow access
  return children;
}

export default ProtectedRoute;