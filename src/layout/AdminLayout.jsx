import React from "react";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <div className="">
      <Outlet></Outlet>
    </div>
  );
};

export default AdminLayout;
