import Cookies from "js-cookie";
function useCookie() {
  const acc_cookie = import.meta.env.VITE_ACC_COOKIE;
  const setCookie = (tokenAccount) => {
    Cookies.set(acc_cookie, tokenAccount, {
      expires: 1, //1 day
      secure: true,
      sameSite: "strict",
      path: "/",
    });
  };
  const getCookie = () => {
    return Cookies.get(acc_cookie);
  };
  const removeCookie = () => {
    return Cookies.remove(acc_cookie);
  };
  const isLoggedIn = () => !!getCookie();
  return { setCookie, getCookie, removeCookie, isLoggedIn };
}

export default useCookie;
