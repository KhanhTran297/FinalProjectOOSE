import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import FormGroup from "../common/FormGroup";
import Header from "../Home/Header";
import { IconEyeToggle } from "../icons";
import * as yup from "yup";
import { Input } from "../input";
import { Label } from "../label";
import { Button } from "../button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import useAccount from "@/hook/useAccount";
import { Field, Form, Formik, replace } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setPass } from "@/redux/slice/account";
const schema = yup.object({
  username: yup.string().required("This field is required"),
  password: yup.string().required("this field is required"),
});
const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  //hook
  const selector = useSelector((state) => state.account);
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin } = useAccount();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //variables
  const accountToken = selector.token;
  //method
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const loginAccount = (dataAccount) => {
    // console.log(value);
    // console.log("username:", value.username);
    // console.log("password:", value.password);
    // console.log(dataAccount);
    // console.log("username:", dataAccount.username);
    // console.log("password:", dataAccount.password);
    handleLogin(dataAccount);
    dispatch(setPass(dataAccount.password));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(loginAccount)} className=" w-full ">
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            control={control}
            name="username"
            type="username"
            placeholder="Enter ur username"
            error={errors.username?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Enter ur password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <Button className="w-full bg-primary" type="submit">
          Login
        </Button>
      </form>
      <Link to="/" className="p-2 border rounded-md">
        Go to Home Page
      </Link>
      <Link to="/signup" className="p-2 border rounded-md">
        Go to Signup
      </Link>
      {/* <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to home
      </button> */}
    </div>
  );
};

export default LoginForm;
