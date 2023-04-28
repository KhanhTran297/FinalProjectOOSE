import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarStyles = styled.div`
  width: 350px;
  background: #ffffff;
  box-shadow: 10px 10px 20px 10px rgba(218, 213, 213, 0.5);
  border-radius: 12px;
  .menu-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px ;
    font-weight: 500;
    color: gray;
    margin-bottom: 5px;
    margin-top: 20px;
    cursor: pointer;
  }
  @media screen and (max-width: 1023.98px) {
    display: none;
  }
`;
const sidebarLinks = [
  {
    title: "admin",
    url: "/admin",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
];

const SideBar = () => {
  return (
    <SidebarStyles className="sidebar">
      <div className="flex mt-5 ">
        <div className="logo mr-5 ml-5">
              <div
                className="logoBox w-10 h-10 rounded-full mr-5"
                onClick={() => {
                  navigate("/");
                }}
              >
                <img
                  src="./img/logo.jpg"
                  alt=""
                  className="logoImg w-full h-full rounded-full"
                />
              </div>
        </div>
        <p className="font-bold text-2xl">CMS</p>
      </div>
      {sidebarLinks.map((link) => {
        if (link.onClick)
          return (
            <div className="menu-item hover:bg-slate-300" onClick={link.onClick} key={link.title}>
              <span className="menu-icon">{link.icon}</span>
              <span className="menu-text">{link.title}</span>
            </div>
          );
        return (
          <NavLink to={link.url} className="menu-item hover:bg-slate-300" key={link.title}>
            <span className="menu-icon">{link.icon}</span>
            <span className="menu-text">{link.title}</span>
          </NavLink>
        );
      })}
    </SidebarStyles>
  );
};

export default SideBar;
