import { Outlet, Navigate } from "react-router-dom";
import useUserContext from "../../../hooks/useUserContext";

/**
 * Component for handling protected routes
 *  If user is logged in, it renders the nested routes (Outlet),
 * otherwise navigates to user login  page
 * @returns
 */
const ProtectRoutes = () => {
  // Access the loginin state from the user context
  const { loggedIn } = useUserContext();

  return loggedIn ? <Outlet /> : <Navigate to="/user-login" />;
};

export default ProtectRoutes;
