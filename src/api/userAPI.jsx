import axios from "axios";
import { devLog } from "../utils/errorUtils";

// Set baseURL
const baseUrl =
  import.meta.env.NODE === "development"
    ? "http://localhost:3001/api"
    : import.meta.env.VITE_REACT_APP_BASE_URL;

/**
 * Creating axios default URL
 */
export const userAPI = axios.create({
  baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const APIIntercentors = () => {
  // Intercepts requests
  userAPI.interceptors.request.use(
    (config) => {
      devLog("A request has been send");
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Intercepts responses
  userAPI.interceptors.response.use(
    (response) => {
      devLog("A response has been received");
      return response;
    },
    (error) => {
      devLog("Error response has been received", error.response);

      //Handle 401 errors
      if (error.response && error.response.status === 401) {
        if (error.response.data.error === "Invalid credentials") {
          //Do nothing for "Invalid credentials" error
          devLog("401 intercepter exception: invalid crendentials");
        } else {
          // Handle other 401 errors
          devLog("401 interceptor:", error, error.response.data.error);
          window.location.href = "/user-logout";

          return Promise.reject(error);
        }
      }

      return Promise.reject(error);
    }
  );
};
