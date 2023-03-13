import useAccount from "@/hook/useAccount";
import useCookie from "@/hook/useCookie";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserOptions = (props) => {
  //hooks
  const { Logout } = useAccount();
  const { removeCookie } = useCookie();
  console.log("check", props.checkAccount);
  let check = props.check;
  //methods
  const handleLogout = () => {
    // console.log("hello");
    // removeCookie();
    Logout();
  };
  return (
    <div className="userOptions">
      {props.checkAccount ? (
        <div className=" m-0">
          <Link to="" className="yourpage">
            <i className="fa-solid fa-user"></i>
            <p className=" ml-1">{props.fullname}</p>
          </Link>
          <Link to="" className="profile">
            <i className="fa-solid fa-user-pen"></i>
            <p className=" ml-1">Profile</p>
          </Link>
          <Link to="" className="bookmark cursor-pointer">
            <i className="fa-regular fa-bookmark"></i>
            <p className=" ml-1">Bookmark</p>
          </Link>
          <Link onClick={handleLogout} className=" cursor-pointer">
            <i className="fa-solid fa-right-from-bracket"></i>
            <p className=" ml-1">Logout</p>
          </Link>
        </div>
      ) : (
        <div className="">
          <Link to="signup" className="signin">
            <p>Sign up</p>
          </Link>
          <Link to="login" className="profile">
            <p>Sign in</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserOptions;
