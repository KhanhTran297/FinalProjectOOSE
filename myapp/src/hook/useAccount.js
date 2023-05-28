import {
  authLoginApi,
  authLogoutApi,
  changePasswordApi,
  editProfileApi,
  getAccountProfileApi,
  sentOtpApi,
  SignUpApi,
} from "@/api/account";
import { setUser } from "@/redux/slice/account";
import { useMutation, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useCookie from "./useCookie";
import useMyToast from "./useMyToast";
import { checkOtpApi } from "@/api/account";

function useAccount() {
  //hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setCookie, getCookie, removeCookie, setPassCookie } = useCookie();
  // const { useSuccess, useError } = useMyToast();
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
      console.log("data", data);
      removeCookie();
      //set token to cookie
      setCookie(data.data.token);
      //Luu thong tin account vao client state
      getProfileAccount();
      // dispatch(getAccountProfileApi({ requiredToken: true }));
      if (
        data.data.role == "ROLE ADMIN" ||
        data.data.role == "ROLE SUPER ADMIN"
      ) {
        navigate("/admin");
      } else {
        navigate("/");
      }
      // useSuccess("Login Success!");
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
    enabled: false,
    retry: 0,
    onSuccess: (profileAccount) => {
      dispatch(setUser(profileAccount.data));
    },
    onError: () => {
      removeCookie();
      navigate("/login");
    },
  });
  //signup
  const { mutate: authSignup } = useMutation({
    mutationFn: SignUpApi,
    onSuccess: (data) => {
      console.log("data", data);
      {
        data.code == "ERROR-USER-0002"
          ? useError("Email exist")
          : navigate("/login");
      }
      // useSuccess("Sign up success!");
    },
  });
  //logout
  const { mutate: logout } = useMutation({
    mutationFn: authLogoutApi,
    onSuccess: () => {
      removeCookie();
      // useSuccess("Logout success!");
      navigate("/");
    },
  });
  //edit profile
  const { mutate: editProfile } = useMutation({
    mutationFn: editProfileApi,
    onSuccess: (respone) => {
      if (respone.result) {
        getProfileAccount();
        // useSuccess("Edit success!");
      } else {
        // useError("Edit fail");
      }
    },
    onError: () => {
      // useError("Save fail!!!!");
    },
  });
  //change password
  const { mutate: changePassword } = useMutation({
    mutationFn: changePasswordApi,
    onSuccess: () => {
      // useSuccess("ChangePassword success");
    },
    onError: () => {
      // useError("ChangePassword Fail");
    },
  });
  //send Otp
  const { mutate: sendOtp, data: datasendOtp } = useMutation({
    mutationFn: sentOtpApi,
    onSuccess: (data) => {
      {
        // data.code == "ERROR-USER-0004"
        //   ? useError("Email doesn't exist")
        //   : useSuccess("Send otp success");
      }
    },
    onError: () => {
      return false;
    },
  });
  //Check Otp
  const { mutate: checkOtp } = useMutation({
    mutationFn: checkOtpApi,
    onSuccess: () => {},
    onError: () => {},
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
    changePassword,
    sendOtp,
    checkOtp,
    datasendOtp,
  };
}
export default useAccount;
