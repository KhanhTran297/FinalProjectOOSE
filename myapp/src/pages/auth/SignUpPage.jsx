import SignUpForm from "@/components/auth/SignUpForm";
import React from "react";

const SignUpPage = () => {
  return (
    <div>
      <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1 dark:text-white">
        Sign Up
      </h1>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignUpPage;
