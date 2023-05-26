import Cookies from "js-cookie";
function useCookie() {
  const acc_cookie = import.meta.env.VITE_TOKEN_COOKIE;
  const dataAcc_cookie = import.meta.env.VITE_ACC_COOKIE;
  const setCookie = (tokenAccount) => {
    Cookies.set("accountToken", tokenAccount, {
      expires: 1, //1 day
      secure: true,
      sameSite: "strict",
      path: "/",
    });
  };
  const setPassCookie = (dataAccount) => {
    Cookies.set("accountData", dataAccount, {
      expires: 1, //1 day
      secure: true,
      sameSite: "strict",
      path: "/",
    });
  };
  const getPassCookie = () => {
    return Cookies.get("accountData");
  };
  const removePassCookie = () => {
    return Cookies.remove("accountData");
  };
  const getCookie = () => {
    return Cookies.get("accountToken");
  };
  const removeCookie = () => {
    return Cookies.remove("accountToken");
  };
  const isLoggedIn = () => !!getCookie();
  return {
    setCookie,
    getCookie,
    removeCookie,
    isLoggedIn,
    setPassCookie,
    getPassCookie,
    removePassCookie,
  };
}

export default useCookie;
