import React from "react";
import { Outlet } from "react-router-dom";

const AuthenLayout = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="h-screen ">
        <img
          src="https://images.unsplash.com/photo-1677577434049-6db567d8d767?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          alt=""
          className="object-fit "
        />
      </div>
      <div className="mx-auto mt-10 p-2 w-[50%]">
        {/* Outlet dùng tương tự children nhưng dùng cho routes và layout */}
        {/* https://reactrouter.com/en/main/components/outlet */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthenLayout;
