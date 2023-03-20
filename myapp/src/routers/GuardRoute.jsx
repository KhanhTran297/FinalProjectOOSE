import useAccount from "@/hook/useAccount";
import useCookie from "@/hook/useCookie";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const GuardRoute = ({ children }) => {
  //hooks
  const { isLoggedIn } = useCookie();
  const { profileAccount, getProfileAccount, loadingPage } = useAccount();
  // console.log("test:", loadingPage);
  const navigate = useNavigate();
  // console.log("islogged", isLoggedIn());
  useEffect(() => {
    //Neu co token trong cookie

    if (isLoggedIn()) {
      if (!profileAccount?.data) {
        getProfileAccount();
      } else {
        return;
      }
    } else {
      navigate("/login");
    }
  }, [profileAccount?.data, isLoggedIn]);
  return (
    <div className="">
      {loadingPage ? <div>Loading</div> : <div>{children}</div>}
    </div>
  );
};

export default GuardRoute;
