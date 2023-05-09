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
  userDayOfBirth: yup.string().required("This field is required"),
  userEmail: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  userPassword: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character "),
  // ac_confirmpassword: yup
  //   .string()
  //   .required("This field is required")
  //   .oneOf([yup.ref("ac_password"), null], "Passwords must match"),

  userFullName: yup.string().required("This field is required"),
  userPhone: yup
    .string()
    .required("This field is required")
    .matches(/((09|03|07|08|05)+([0-9]{8})\b)/g, "Invalid phone format"),
});
const { useError } = useMyToast();
const CreateExpertForm = () => {
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
  const { handleCreateExpertAccount } = useAdmin();
  //methods
  const handleSignUp = (value) => {
    // var userDayOfBirth=value.userDayOfBirth+" 00:00:00"
    // console.log("string ne", userDayOfBirth);
    value.userDayOfBirth = value.userDayOfBirth + " 00:00:00";
    var data = {
      userAvatar:
        "https://i.pinimg.com/236x/19/b8/d6/19b8d6e9b13eef23ec9c746968bb88b1.jpg",
      ...value,
    };
    handleCreateExpertAccount.mutate(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleSignUp)} className=" w-full ">
        <FormGroup>
          <Label htmlFor="userFullName">Fullname</Label>
          <Input
            control={control}
            name="userFullName"
            type="userFullName"
            placeholder="Tran Minh Gia Khanh"
            error={errors.userFullName?.message}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="userEmail">Email</Label>
          <Input
            control={control}
            name="userEmail"
            type="userEmail"
            placeholder="example@gmail.com"
            error={errors.userEmail?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="userPhone">Phonenumber</Label>
          <Input
            control={control}
            name="userPhone"
            type="userPhone"
            placeholder="xxx-xxx-xxx"
            error={errors.userPhone?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="userDayOfBirth">Date of birth</Label>
          <Input
            control={control}
            name="userDayOfBirth"
            type="userDayOfBirth"
            placeholder="dd/mm/yyyy"
            error={errors.userDayOfBirth?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="userPassword">Password</Label>
          <Input
            control={control}
            name="userPassword"
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
        {/* <FormGroup>
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
        </FormGroup> */}
        <Button className="w-full bg-primary mt-12" type="submit">
          Create Expert Account
        </Button>
      </form>
    </div>
  );
};

export default CreateExpertForm;
