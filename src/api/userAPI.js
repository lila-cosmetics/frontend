import axios from "axios";
import process from "process";
import { devLog } from "@utils/errorUtils";

// Setup baseURL
const baseUrl =
  process.env.NODE_ENV == "development"
    ? "http://localhost:3001/api"
    : import.meta.env.VITE_REACT_APP_BASE_URL;




/**
 * Creating axios default base URL
 */
const userAPI = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

console.log(process.env.NODE_ENV);

export const APIInterceptors = () => {
  // Intercepts requests
  userAPI.interceptors.request.use(
    (request) => {
      devLog("A request has been sent. 👍");
      return request;
    },
    (error) => {
      devLog("Error while sending a request to server. 👎");
      return Promise.reject(error);
    }
  );

  // Intercepts responses
  userAPI.interceptors.response.use(
    (response) => {
      devLog("A response has been received. 👍");
      return response;
    },
    (error) => {
      devLog("Error while getting a response from server. 👎", error.response);

      // Handles 401 errors
      if (error.response && error.response.status === 401) {
        if (error.response.data.error === "Invalid credentials") {
          devLog("401 interceptor exception: invalid credentials");
        } else {
          // Handles other 401 errors
          devLog("401 interceptor:", error, error.response.data.error);
          window.location.href = "/user-logout";

          return Promise.reject(error);
        }
      }
      return Promise.reject(error);
    }
  );
};
export default userAPI;
