import { instance } from "@/api/instance";
import useCookie from "./useCookie";
const { getCookie } = useCookie();
function useCallApi() {
  //GET
  const useGet = ({
    url = "",
    params = {},
    headers = {},
    requiredToken = false,
  } = {}) => {
    // Get all header
    let fullHeader = { ...headers };
    // If required TOKEN -> Get Access Token from Cookies
    // console.log("requiredToken:", requiredToken);
    requiredToken &&
      (fullHeader["Authorization"] = `Bearer ${getCookie("accountToken")}`);

    const usedGet = () =>
      instance.get(
        url,
        // { params },
        {
          headers: {
            ...instance.defaults.headers,
            ...fullHeader,
          },
        },
        {
          params,
        }
      );
    return usedGet();
  };
  //POST
  const usePost = ({
    url = "",
    params = {},
    headers = {},
    requiredToken = false,
  } = {}) => {
    // Get all header
    let fullHeader = { ...headers };
    // If required TOKEN -> Get Access Token from Cookies
    // console.log("requireToken post", requiredToken);
    requiredToken &&
      (fullHeader["Authorization"] = `Bearer ${getCookie("accountToken")}`);

    const usedPost = () =>
      instance.post(
        url,
        { ...params },
        {
          headers: {
            ...instance.defaults.headers,
            ...fullHeader,
          },
        }
      );
    return usedPost();
  };
  //DELETE
  const useDelete = ({
    url = "",
    params = {},
    headers = {},
    requiredToken = false,
  } = {}) => {
    // Get all header
    let fullHeader = { ...headers };
    // If required TOKEN -> Get Access Token from Cookies
    requiredToken && (fullHeader["Authorization"] = `Bearer ${getToken()}`);

    const usedDelete = () =>
      instance.delete(
        url,
        {
          headers: {
            ...instance.defaults.headers,
            ...fullHeader,
          },
        },
        { ...params }
      );
    return usedDelete();
  };
  return { useGet, usePost, useDelete };
}
export default useCallApi;
