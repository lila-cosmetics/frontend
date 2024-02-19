import { useContext } from "react";
import UserContext from "../context/userContext";

const useUserContext = () => {
  // Access the UserContext
  const context = useContext(UserContext);

  // Throw an error if used outside of a UserProvider
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

export default useUserContext;
