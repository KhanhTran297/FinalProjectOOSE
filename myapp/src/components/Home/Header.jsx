import useAccount from "@/hook/useAccount";
import useCookie from "@/hook/useCookie";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserOptions from "./UserOptions";
const Header = () => {
  //hooks
  const [userbox, setUserBox] = useState(false);
  const [checkAccount, setCheckAccount] = useState(false);
  const { isLoggedIn } = useCookie();
  const { profileAccount, getProfileAccount } = useAccount();
  //method
  const handleToggleuserBox = () => {
    setUserBox((prevState) => !prevState);
  };
  // console.log("Profile", profileAccount);
  useEffect(() => {
    //Neu co token trong cookie
    if (isLoggedIn()) {
      //Neu chua co tai khoan trong (global state) thi refetch de lay thong tin user
      if (!profileAccount?.data) {
        getProfileAccount();
      } else {
        setCheckAccount((checkAccount) => (checkAccount = true));
      }
    } else {
      setCheckAccount((checkAccount) => (checkAccount = false));
    }
  }, [profileAccount?.data, isLoggedIn]);
  return (
    <div id="header" className=" mt-0 mb-0 mr-5 ml-5 backdrop-blur-xl">
      <div className="headerContainer grid grid-cols-2 pt-18 pb-18 pl-0 pr-0 ">
        <div className="navBox flex items-center">
          <div className="logo mr-5">
            <div className="logoBox w-10 h-10 rounded-full mr-5">
              <img
                src="./img/logo1.jfif"
                alt=""
                className="logoImg w-full h-full rounded-full"
              />
            </div>
          </div>
          <div className="Home mr-5">
            <Link
              to="/"
              className=" no-underline text-black text-18 cursor-pointer hover:text-header"
            >
              HOME
            </Link>
          </div>
          <div className="Forum mr-5">
            <Link
              to="/forum"
              className="no-underline text-black text-18 cursor-pointer hover:text-header"
            >
              FORUM
            </Link>
          </div>
          <div className="Contact mr-5">
            <Link
              to="/contact"
              className="no-underline text-black text-18 cursor-pointer hover:text-header"
            >
              CONTACT
            </Link>
          </div>
        </div>
        <div className="toolBox flex flex-row items-center justify-end">
          <div className="searchContainer ml-36">
            <form action="" className="searchBox relative">
              <input
                type="text"
                className="search-text p-searchtext rounded-5 border-none"
                placeholder="Search Post..."
                required
              />
              <i className="fa-solid fa-magnifying-glass hover:text-red-600 cursor-pointer absolute right-0 bottom-0 translate-x-[-50%] translate-y-[-80%]"></i>
            </form>
          </div>
          <div className="iconChat ml-36">
            <i className="fa-sharp fa-regular fa-comments hover:text-red-600 cursor-pointer"></i>
          </div>
          <div className="iconNotification ml-36">
            <i className="fa-regular fa-bell hover:text-red-600 cursor-pointer"></i>
          </div>

          <div className="userBox ml-36 relative">
            <i
              className="fa-regular fa-user hover:text-red-600 cursor-pointer"
              onClick={handleToggleuserBox}
            ></i>
            {userbox ? (
              <UserOptions
                fullname={profileAccount?.data.fullName}
                avatar={profileAccount?.data.avatar}
                check={userbox}
                checkAccount={checkAccount}
              ></UserOptions>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
