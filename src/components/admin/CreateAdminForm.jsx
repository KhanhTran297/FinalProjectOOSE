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
import useAdmin from "@/hook/useAdmin";

const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character "),
  // ac_confirmpassword: yup
  //   .string()
  //   .required("This field is required")
  //   .oneOf([yup.ref("ac_password"), null], "Passwords must match"),
  fullName: yup.string().required("This field is required"),
});
const { useError } = useMyToast();
const CreateAdminForm = () => {
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
  const { handleCreateAdminAccount } = useAdmin();
  //methods
  const handleSignUp = (value) => {
    // var userDayOfBirth=value.userDayOfBirth+" 00:00:00"
    // console.log("string ne", userDayOfBirth);
    var data = {
      avatarPath:
        "https://i.pinimg.com/236x/19/b8/d6/19b8d6e9b13eef23ec9c746968bb88b1.jpg",
      ...value,
    };
    handleCreateAdminAccount.mutate(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleSignUp)} className=" w-full ">
        <FormGroup>
          <Label htmlFor="fullName">Fullname</Label>
          <Input
            control={control}
            name="fullName"
            type="fullName"
            placeholder="Tran Minh Gia Khanh"
            error={errors.fullName?.message}
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
            error={errors.userPassword?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <Button className="w-full bg-primary mt-12" type="submit">
          Create Admin Account
        </Button>
      </form>
    </div>
  );
};

export default CreateAdminForm;
