import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../button";
import FormGroup from "../common/FormGroup";
import { Input } from "../input";
import { Label } from "../label";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconEyeToggle } from "../icons";
import useAccount from "@/hook/useAccount";

const schema = yup.object({
  username: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character "),
  fullname: yup.string().required("This field is required"),
  phonenumber: yup.string().required("This field is required"),
});

const SignUpForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  //hook
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const { authSignup } = useAccount();
  //methods
  const handleSignUp = (value) => {
    let data = {
      avatarPath: "string",
      email: value.email,
      fullName: value.fullname,
      kind: 1,
      password: value.password,
      phone: value.phonenumber,
      status: 1,
      username: value.username,
    };
    authSignup(data);
  };
  return (
    <div>
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{" "}
        <Link to="/login" className="font-medium underline text-primary">
          Login
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border gap-x-3 border-strock rounded-xl text-text2 dark:text-white dark:border-darkStroke">
        {/* <img srcSet="/icon-google.png 2x" alt="icon-google" /> */}
        <span>Sign up with google</span>
      </button>
      <form onSubmit={handleSubmit(handleSignUp)} className=" w-full ">
        <FormGroup>
          <Label htmlFor="fullname">Fullname</Label>
          <Input
            control={control}
            name="fullname"
            type="fullname"
            placeholder="Tran Minh Gia Khanh"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            control={control}
            name="username"
            type="username"
            placeholder="AnhBui"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="phonenumber">Phonenumber</Label>
          <Input
            control={control}
            name="phonenumber"
            type="phonenumber"
            placeholder="xxx-xxx-xxx"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        {/* <div className="flex items-start mb-5 gap-x-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
            <p className="flex-1 text-xs lg:text-sm text-text2 dark:text-text3">
              I agree to the
              <span className="underline text-secondary">
                {" "}
                Terms of Use
              </span>{" "}
              and have read and understand the
              <span className="underline text-secondary"> Privacy policy.</span>
            </p>
          </Checkbox>
        </div> */}
        <Button className="w-full bg-primary" type="submit">
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
