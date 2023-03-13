import LoginForm from "@/components/auth/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1 dark:text-white">
        Login
      </h1>
      <LoginForm></LoginForm>
    </div>
  );
};

export default LoginPage;
