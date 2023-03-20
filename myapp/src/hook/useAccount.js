import {
  authLoginApi,
  authLogoutApi,
  editProfileApi,
  getAccountProfileApi,
  SignUpApi,
} from "@/api/account";
import { setToken, setUser } from "@/redux/slice/account";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useCookie from "./useCookie";
import useMyToast from "./useMyToast";

function useAccount() {
  //hooks
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setCookie, getCookie, removeCookie, setPassCookie } = useCookie();
  const { useSuccess, useError } = useMyToast();
  const selector = useSelector((state) => state.account);
  //variables
  const passAcc = selector.pass;
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
      //luu password vao cookie
      setPassCookie(passAcc);
      dispatch(setUser(profileAccount.data));
    },
  });
  //signup
  const { mutate: authSignup } = useMutation({
    mutationFn: SignUpApi,
    onSuccess: () => {
      useSuccess("Sign up success!");
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
  //edit profile
  const { mutate: editProfile } = useMutation({
    mutationFn: editProfileApi,
    onSuccess: (respone) => {
      if (respone.result) {
        getProfileAccount();
        useSuccess("Edit success!");
      } else {
        useError("Old password not match!!!");
      }
    },
    onError: () => {
      useError("Save fail!!!!");
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
    editProfile,
  };
}
export default useAccount;
