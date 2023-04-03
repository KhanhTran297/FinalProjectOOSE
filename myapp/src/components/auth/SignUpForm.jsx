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
import useMyToast from "@/hook/useMyToast";

const schema = yup.object({
  ac_dob: yup.string().required("This field is required"),
  ac_email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  ac_password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character "),
  ac_confirmpassword: yup
    .string()
    .required("This field is required")
    .oneOf([yup.ref("ac_password"), null], "Passwords must match"),

  ac_username: yup.string().required("This field is required"),
  ac_phone: yup
    .string()
    .required("This field is required")
    .matches(/((09|03|07|08|05)+([0-9]{8})\b)/g, "Invalid phone format"),
});
const { useError } = useMyToast();
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
  const [showConfirm, setShowConfirm] = useState(false);
  const handleToggleConfirm = () => {
    setShowConfirm(!showConfirm);
  };
  const { authSignup } = useAccount();
  //methods
  const handleSignUp = (value) => {
    authSignup(value);
  };
  return (
    <div>
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{" "}
        <Link to="/login" className="font-medium underline text-primary">
          Login
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-4 mb-5 text-xl font-semibold border gap-x-3 border-strock rounded-xl text-text2 dark:text-white dark:border-darkStroke">
        {/* <img srcSet="/icon-google.png 2x" alt="icon-google" /> */}
        <span>Sign up with google</span>
      </button>
      <form onSubmit={handleSubmit(handleSignUp)} className=" w-full ">
        <FormGroup>
          <Label htmlFor="ac_username">Fullname</Label>
          <Input
            control={control}
            name="ac_username"
            type="ac_username"
            placeholder="Tran Minh Gia Khanh"
            error={errors.ac_username?.message}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="ac_email">Email</Label>
          <Input
            control={control}
            name="ac_email"
            type="ac_email"
            placeholder="example@gmail.com"
            error={errors.ac_email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="ac_phone">Phonenumber</Label>
          <Input
            control={control}
            name="ac_phone"
            type="ac_phone"
            placeholder="xxx-xxx-xxx"
            error={errors.ac_phone?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="ac_dob">Date of birth</Label>
          <Input
            control={control}
            name="ac_dob"
            type="ac_dob"
            placeholder="yyyy-mm-dd"
            error={errors.ac_dob?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            control={control}
            name="ac_password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Create a password"
            error={errors.ac_password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Confirm password</Label>
          <Input
            control={control}
            name="ac_confirmpassword"
            type={`${showConfirm ? "text" : "password"}`}
            placeholder="confirm  password"
            error={errors.ac_confirmpassword?.message}
          >
            <IconEyeToggle
              open={showConfirm}
              onClick={handleToggleConfirm}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <Button className="w-full bg-primary mt-12" type="submit">
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
