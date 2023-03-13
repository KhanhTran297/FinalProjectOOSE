import Header from "@/components/Home/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="ml-2 mr-2">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
