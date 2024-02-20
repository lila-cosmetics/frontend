import { toast } from "react-toastify";

const useToast = () => {
  const notify = (message, options = {}) => {
    toast(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      ...options,
    });
  };

  return notify;
};

export default useToast;
