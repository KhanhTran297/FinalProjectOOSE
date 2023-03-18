import { toast } from "react-toastify";
function useMyToast() {
  const useSuccess = (content) => {
    toast.success(content, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const useError = (content) => {
    toast.error(content, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return { useSuccess, useError };
}

export default useMyToast;
