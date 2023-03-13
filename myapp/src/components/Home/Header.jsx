import useAccount from "@/hook/useAccount";
import useCookie from "@/hook/useCookie";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/header.css";
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
    <div id="header">
      <div className="headerContainer ">
        <div className="navBox">
          <div className="logo">
            <div className="logoBox">
              <img src="./img/logo1.jfif" alt="" className="logoImg" />
            </div>
          </div>
          <div className="Home">
            <Link to="/">HOME</Link>
          </div>
          <div className="Forum">
            <Link to="/forum">FORUM</Link>
          </div>
          <div className="Contact">
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>
        <div className="toolBox">
          <div className="searchContainer">
            <form action="" className="searchBox">
              <input
                type="text"
                className="search-text"
                placeholder="Search Post..."
                required
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </form>
          </div>
          <div className="iconChat">
            <i className="fa-sharp fa-regular fa-comments"></i>
          </div>
          <div className="iconNotification">
            <i className="fa-regular fa-bell"></i>
          </div>

          <div className="userBox">
            <i className="fa-regular fa-user" onClick={handleToggleuserBox}></i>
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
