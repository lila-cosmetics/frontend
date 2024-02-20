import PropTypes from "prop-types";
import { useState } from "react";
import userAPI from "@api/userAPI";
import { devLog, handleServerErrors } from "@utils/errorUtils";
import UserContext from "@context/userContext";

/**
 * Renders UserProvider Componenets
 * @returns
 */
const UserProvider = ({ children }) => {
  //Retrieve user data from localStroage
  const storedUser = JSON.parse(localStorage.getItem("user")) || null;

  // State variables for user authentication
  const [loggedIn, setLoggedIn] = useState(!!storedUser);
  const [user, setUser] = useState(storedUser);
  const [error, setError] = useState("");

  const loginUser = async (data) => {
    try {
      setError(""); //Clears the error

      // Send login request to the server
      const response = await userAPI.post("/users/login", data);

      // Extract user data from response
      const userData = response.data.user;

      // Update state and localStorage on successful login
      setUser(userData);
      setLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      devLog("Errors found");
      devLog(error.response);
      setLoggedIn(false);
      handleServerErrors(error, setError);

      // Handle different error scenarios
      if (error.response && error.response.status === 401) {
        setError("Invalid credentials");
      } else if (error.response && error.response.status === 403) {
        setError("You don't have permission to log in");
      } else {
        setError("An unknown error occurred, please try again later");
      }
    }
  };
  return (
    <UserContext.Provider value={{ loggedIn, loginUser, user, error }}>
      {children}
    </UserContext.Provider>
  );
};

// Define prop types foir the UserProvider component
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
