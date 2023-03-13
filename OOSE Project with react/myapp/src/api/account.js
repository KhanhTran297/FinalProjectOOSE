import useCallApi from "@/hook/useCallApi";
import useCookie from "@/hook/useCookie";
import { instance } from "./instance";

const { getCookie } = useCookie();
const { useGet, usePost } = useCallApi();
export const authLoginApi = (params) => {
  const url = "/account/login";
  return usePost({ url, params });
};
export const getAccountProfileApi = () => {
  const url = "/account/profile";
  return useGet({ url, requiredToken: true });
};
export const SignUpApi = (params) => {
  const url = "/account/create_admin";
  return usePost({ url, requiredToken: true, params });
};
//logout
export const authLogoutApi = () => {
  const url = "/account/logout";
  return useGet({ url, requiredToken: true });
};
