import { Outlet, Navigate } from "react-router-dom"; //Outlet is what we want to return if we are logged in
import { useSelector } from "react-redux"; // is how we find out if there is a user info piece of state
/**
 * Component for handling protected routes
 *  If user is logged in, it renders the nested routes (Outlet),
 * otherwise navigates to user login  page
 * @returns
 */
const ProtectRoutes = () => {
   const {userInfo}= useSelector(state=> state.auth)

  return userInfo ? <Outlet/> : <Navigate to='/login' replace />
};

export default ProtectRoutes;
