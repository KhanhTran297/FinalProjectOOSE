import useAccount from "@/hook/useAccount";
import useCookie from "@/hook/useCookie";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserOptions = (props) => {
  //hooks
  const { logout } = useAccount();
  const { removeCookie } = useCookie();
  // console.log("check", props.checkAccount);
  let check = props.check;
  const { profileAccount } = useAccount();
  //methods
  const handleLogout = () => {
    // console.log("hello");
    // removeCookie();
    logout();
  };
  return (
    <div className="userOptions absolute z-10 right-[24px] translate-x-0 translate-y-[10px] bg-white shadow-userOptions rounded-5">
      {props.checkAccount ? (
        <div className=" m-0 p-userOptions w-max">
          <Link
            to=""
            className="yourpage p-[10px] grid grid-cols-[auto_auto] border-t-[0.5px] border-solid border-gray-400 w-full items-center hover:text-userOptions cursor-pointer"
          >
            <img
              src={profileAccount?.data.avatar}
              className=" w-[30px] h-[30px] rounded-full"
              alt=""
            />
            <p className=" ml-3">{props.fullname}</p>
          </Link>
          <Link
            to="profile"
            className="profile p-[10px] grid grid-cols-[20%_80%] border-t-[0.5px] border-solid border-gray-400 w-full items-center hover:text-userOptions cursor-pointer "
          >
            <i className="fa-solid fa-user-pen"></i>
            <p className=" ml-1">Profile</p>
          </Link>
          <Link
            to=""
            className="bookmark p-[10px] grid grid-cols-[20%_80%] border-t-[0.5px] border-solid border-gray-400 w-full items-center hover:text-userOptions cursor-pointer"
          >
            <i className="fa-regular fa-bookmark "></i>
            <p className=" ml-1">Bookmark</p>
          </Link>
          <Link
            onClick={handleLogout}
            className=" grid grid-cols-[20%_80%] p-[10px] border-t-[0.5px] border-solid border-gray-400 w-full items-center hover:text-userOptions cursor-pointer"
          >
            <i className="fa-solid fa-right-from-bracket"></i>
            <p className=" ml-1">Logout</p>
          </Link>
        </div>
      ) : (
        <div className=" w-userOptions_authen">
          <Link
            to="signup"
            className="signin justify-center p-[10px] flex border-t-[0.5px] border-solid border-gray-400 w-full items-center hover:text-userOptions cursor-pointer"
          >
            <p>Sign up</p>
          </Link>
          <Link
            to="login"
            className="profile justify-center p-[10px] flex border-t-[0.5px] border-solid border-gray-400 w-full items-center hover:text-userOptions cursor-pointer"
          >
            <p>Sign in</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserOptions;
