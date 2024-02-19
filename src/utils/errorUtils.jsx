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
