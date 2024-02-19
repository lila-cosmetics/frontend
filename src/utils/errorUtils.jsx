/**
 * Utility function to log in development environment only.
 * @param {*} message
 * @param {*} data
 */
export const devLog = (message = "devLog", data) => {
  if (import.meta.env.NODE === "development") {
    if (data !== undefined) {
      console.log(message, data);
    } else {
      console.log(message);
    }
  }
};

/**
 *  Utility function for handling internal server error (500)
 * @param {*} error
 * @param {*} setError
 */
export const handleServerErrors = (error, setError) => {
  // Handle errors from the server
  if (error.error && error.error.data) {
    // Check if there are multiple errors

    if (error.response.data.error) {
      const serverError = error.response.data.error;

      //Set the first error message only
      setError(serverError.length > 0 ? serverError[0].msg : null);
    }

    // Check if there is a single error only
  } else if (error.response.data.error) {
    setError(error.response.data.error);
  }
};
