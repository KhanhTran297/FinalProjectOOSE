import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/header.css";
const Header = () => {
  //hooks
  const [userbox, setUserBox] = useState(false);
  //method
  const handleToggleuserBox = () => {
    setUserBox((prevState) => !prevState);
  };
  return (
    <div id="header">
      <div className="headerContainer">
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
              <i class="fa-solid fa-magnifying-glass"></i>
            </form>
          </div>
          <div className="iconChat">
            <i class="fa-sharp fa-regular fa-comments"></i>
          </div>
          <div className="iconNotification">
            <i class="fa-regular fa-bell"></i>
          </div>

          <div className="userBox">
            <i class="fa-regular fa-user" onClick={handleToggleuserBox}></i>
            {userbox ? (
              <div className="userOptions">
                <Link to="/signup" className="signIn">
                  Sign Up
                </Link>
                <Link to="/login" className="signIn">
                  Sign In
                </Link>
              </div>
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
