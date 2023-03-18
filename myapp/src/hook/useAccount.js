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
import useMyToast from "./useMyToast";

function useAccount() {
  //hooks
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setCookie, getCookie, removeCookie } = useCookie();
  const { useSuccess, useError } = useMyToast();
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

        getProfileAccount();
        // dispatch(getAccountProfileApi({ requiredToken: true }));
        navigate("/");
        useSuccess("Login Success!");
      } else {
        useError("Wrong username or password");
      }
    },
    onError: () => {
      useError("Wrong username or password");
    },
  });
  //get
  const {
    data: profileAccount,
    refetch: getProfileAccount,
    isLoading: loadingPage,
  } = useQuery({
    queryKey: ["profileAccount"],
    queryFn: getAccountProfileApi,
    onSuccess: (profileAccount) => {
      // console.log(profileAccount);
      // sau Khi login thanh cong thi tien hanh get data user va luu vao client state tuc la redux
      dispatch(setUser(profileAccount.data));
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
  const { mutate: logout } = useMutation({
    mutationFn: authLogoutApi,
    onSuccess: () => {
      removeCookie();
      useSuccess("Logout success!");
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
    logout,
    loadingPage,
  };
}
export default useAccount;
