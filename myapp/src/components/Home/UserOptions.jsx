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
    <div className="userOptions absolute z-10 right-0 translate-x-0 translate-y-[10px] bg-white shadow-userOptions rounded-5">
      {props.checkAccount ? (
        <div className=" m-0 p-userOptions w-userOptions">
          <Link
            to=""
            className="yourpage flex border-t-[0.5px] border-solid border-gray-400 w-full items-center hover:text-userOptions cursor-pointer"
          >
            <i className="fa-solid fa-user"></i>
            <p className=" ml-1">{props.fullname}</p>
          </Link>
          <Link
            to=""
            className="profile flex border-t-[0.5px] border-solid border-gray-400 w-full items-center hover:text-userOptions cursor-pointer"
          >
            <i className="fa-solid fa-user-pen"></i>
            <p className=" ml-1">Profile</p>
          </Link>
          <Link
            to=""
            className="bookmark flex border-t-[0.5px] border-solid border-gray-400 w-full items-center hover:text-userOptions cursor-pointer"
          >
            <i className="fa-regular fa-bookmark"></i>
            <p className=" ml-1">Bookmark</p>
          </Link>
          <Link
            onClick={handleLogout}
            className=" flex border-t-[0.5px] border-solid border-gray-400 w-full items-center hover:text-userOptions cursor-pointer"
          >
            <i className="fa-solid fa-right-from-bracket"></i>
            <p className=" ml-1">Logout</p>
          </Link>
        </div>
      ) : (
        <div className=" w-userOptions_authen">
          <Link
            to="signup"
            className="signin justify-center pt-1 pb-1 flex border-t-[0.5px] border-solid border-gray-400 w-full items-center hover:text-userOptions cursor-pointer"
          >
            <p>Sign up</p>
          </Link>
          <Link
            to="login"
            className="profile justify-center pt-1 pb-1 flex border-t-[0.5px] border-solid border-gray-400 w-full items-center hover:text-userOptions cursor-pointer"
          >
            <p>Sign in</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserOptions;
