import React from "react";
import { Input } from "../input";
import { Label } from "../label";
import FormGroup from "../common/FormGroup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../button";
import { useSelector } from "react-redux";
import useAccount from "@/hook/useAccount";
// import { Field, Form, Formik } from "formik";
import useCookie from "@/hook/useCookie";
import { useState } from "react";
import { IconEyeToggle } from "../icons";

const schema = yup.object({
  oldpassword: yup.string().required("This field is required"),
  newpassword: yup
    .string()
    .notOneOf(
      [yup.ref("oldpassword"), null],
      "New password must be different from old password"
    )
    .required("This field is required")
    .min(8, "Password must be 8 character "),

  confirmnew: yup
    .string()
    .oneOf([yup.ref("newpassword"), null], "New Passwords must match")
    .required("This field is required"),
});
const ChangePassword = (props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  //hooks
  const selector = useSelector((state) => state.account);
  const pass = selector.pass;
  const { editProfile } = useAccount();
  const { getPassCookie } = useCookie();
  //methods
  // const handleSave = (data) => {
  //   let dataAccount = {
  //     avatar: props.dataUserAccount?.avatar,
  //     fullName: props.dataUserAccount?.fullName,
  //     oldPassword: data.oldpassword,
  //     password: data.newpassword,
  //   };
  //   // console.log(dataAccount);
  //   // console.log("hello");
  //   editProfile(dataAccount);
  // };
  const handleSave = (data) => {
    if (data.newpassword == data.confirmnew) {
      let data = {
        avatar: props.dataUserAccount?.avatar,
        fullName: props.dataUserAccount?.fullName,
        oldPassword: data.oldpassword,
        password: data.newpassword,
      };
      editProfile(data);
    }
  };
  //variables
  //hook
  // const [showOldPassword, setShowOldPassword] = useState(false);
  // const handleToggleOldPassword = () => {
  //   setShowOldPassword(!showOldPassword);
  // };
  // const [showNewPassword, setShowNewPassword] = useState(false);
  // const handleToggleNewPassword = () => {
  //   setShowNewPassword(!showNewPassword);
  // };
  // const [showConfirmNew, setShowConfirmNew] = useState(false);
  // const handleToggleConfirmNew = () => {
  //   setShowConfirmNew(!showConfirmNew);
  // };

  const userAccount = selector.account;
  return (
    <div className=" flex-1 flex-col flex  items-center">
      <div className=" mt-20 text-[40px] text-header font-extrabold">
        CHANGE PASSWORD
      </div>
      <div className="w-[70%]">
        <form onSubmit={handleSubmit(handleSave)} className="w-full">
          <FormGroup>
            <Label htmlFor="oldpassword">Old Password</Label>
            <Input
              control={control}
              name="oldpassword"
              type="oldpassword"
              placeholder="Old Password"
              error={errors.oldpassword?.message}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="newpassword">New Password</Label>
            <Input
              control={control}
              name="newpassword"
              type="newpassword"
              placeholder="New password"
              error={errors.newpassword?.message}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirmnew">Confirm New Password</Label>
            <Input
              control={control}
              name="confirmnew"
              type="confirmnew"
              placeholder="Confirm New Password"
              error={errors.confirmnew?.message}
            ></Input>
          </FormGroup>
          <Button className="w-full bg-primary mt-12" type="submit">
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
