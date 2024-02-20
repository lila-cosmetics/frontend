import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userAPI from "@api/userAPI";
import useToast from "@hooks/useToast";

const Registration = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const notify = useToast();
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleRegistration = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    // Checks if the password with confirm password matches
    const confirmPassword = formData.get("confirm-password");
    if (data.password !== confirmPassword) {
      setPasswordMismatch(true);
      return;
    } else {
      setPasswordMismatch(false);
    }

    try {
      await userAPI.post("/users/register", data);
      setError("");

      notify("Successfully Registered", { type: "success" });

      setTimeout(() => {
        navigate("/login"); // Redirect to login page
      }, 5000);
    } catch (error) {
      notify("Registration failed", { type: "error" });
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-[72vh]">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-cards dark:border-cards">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleRegistration}
          >
            <div>
              <label
                htmlFor="firstname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your firstname
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-cards dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your lastname
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-cards dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-cards dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-cards dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-cards dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Notification if the password doesn't match */}
            {passwordMismatch && (
              <p className="text-sm font-light text-red-500 dark:text-red-400">
                Passwords do not match.
              </p>
            )}

            <button
              type="submit"
              onClick={notify}
              className="w-full text-cards bg-button hover:text-button hover:bg-footer focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus:ring-primary-800"
            >
              Create an account
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="font-medium text-button hover:underline dark:text-primary-500"
              >
                Login here
              </NavLink>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Registration;
