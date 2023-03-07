import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <form action="" className="flex flex-col gap-2 mb-5">
        <input
          type="text"
          name="username"
          placeholder="Enter ur username"
          className="p-3 border-2 border-gray-300 rounded-md outline-none focus:border-green-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter ur password"
          className="p-3 border-2 border-gray-300 rounded-md outline-none focus:border-green-500"
        />
        <input
          type="submit"
          value="Login"
          className="border-green-500 border p-2 cursor-pointer rounded-md transition-all hover:bg-green-500 hover:text-white"
        />
      </form>
      <Link to="/" className="p-2 border rounded-md">
        Go to Home Page
      </Link>
      <Link to="/signup" className="p-2 border rounded-md">
        Go to Signup
      </Link>
    </div>
  );
};

export default LoginForm;
