import {
  authLoginApi,
  authLogoutApi,
  getAccountProfileApi,
  SignUpApi,
} from "@/api/account";
import { setToken, setUser } from "@/redux/slice/account";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useCookie from "./useCookie";

function useAccount() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setCookie, getCookie, removeCookie } = useCookie();
  //login
  const {
    mutate: handleLogin,
    data: accountdata,
    isLoading,
  } = useMutation({
    mutationFn: authLoginApi,
    onSuccess: (data) => {
      if (data.result) {
        removeCookie();
        //set token to cookie
        setCookie(data.data.token);
        //Luu thong tin account vao client state
        // dispatch(setUser(data.))
        getProfileAccount();
        // dispatch(getAccountProfileApi({ requiredToken: true }));
        navigate("/");
        toast.success("Login success!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Wrong username or password", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    },
    onError: () => {
      toast.error("Wrong username or password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });
  //get
  const { data: profileAccount, refetch: getProfileAccount } = useQuery({
    queryKey: ["profileAccount"],
    queryFn: getAccountProfileApi,
    onSuccess: (profileAccount) => {
      // console.log(profileAccount);
    },
  });
  //signup
  const { mutate: authSignup } = useMutation({
    mutationFn: SignUpApi,
    onSuccess: () => {
      toast.success("Signup success!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/");
    },
  });
  //logout
  const { mutate: Logout } = useMutation({
    mutationFn: authLogoutApi,
    onSuccess: () => {
      removeCookie();
      toast.success("Logout success!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/");
    },
  });
  return {
    handleLogin,
    accountdata,
    authSignup,
    profileAccount,
    getAccountProfileApi,
    getProfileAccount,
    Logout,
  };
}
export default useAccount;
