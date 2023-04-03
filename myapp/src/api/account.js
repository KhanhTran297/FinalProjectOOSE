import useCallApi from "@/hook/useCallApi";
import useCookie from "@/hook/useCookie";
import { instance } from "./instance";

const { getCookie } = useCookie();
const { useGet, usePost, useEdit } = useCallApi();
export const authLoginApi = (params) => {
  const url = "/account/login";
  return usePost({ url, params });
};
export const getAccountProfileApi = () => {
  const url = "/account/profile";
  return useGet({ url, requiredToken: true });
};
export const SignUpApi = (params) => {
  const url = "accounts/save-user";
  return usePost({ url, params });
};
//logout
export const authLogoutApi = () => {
  const url = "/account/logout";
  return useGet({ url, requiredToken: true });
};
//edit
export const editProfileApi = (params) => {
  const url = "/account/update_profile";
  return useEdit({ url, requiredToken: true, params });
};
