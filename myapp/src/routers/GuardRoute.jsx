import useAccount from "@/hook/useAccount";
import useCookie from "@/hook/useCookie";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const GuardRoute = ({ children }) => {
  //hooks
  const { isLoggedIn } = useCookie();
  const { profileAccount, getProfileAccount } = useAccount();
  const navigate = useNavigate();
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
  return <div className="">{children}</div>;
};

export default GuardRoute;
