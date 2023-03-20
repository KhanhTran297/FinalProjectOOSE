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
import { Field, Form, Formik } from "formik";
import useCookie from "@/hook/useCookie";
const ChangePassword = (props) => {
  //hooks
  const selector = useSelector((state) => state.account);
  const pass = selector.pass;
  const { editProfile } = useAccount();
  const { getPassCookie } = useCookie();
  //methods
  const handleSave = (data) => {
    let dataAccount = {
      avatar: props.dataUserAccount?.avatar,
      fullName: props.dataUserAccount?.fullName,
      oldPassword: data.oldpassword,
      password: data.newpassword,
    };
    console.log(dataAccount);
    // console.log("hello");
    editProfile(dataAccount);
  };
  //variables

  const userAccount = selector.account;
  return (
    <Formik
      initialValues={{
        oldpassword: "",
        newpassword: "",
      }}
      onSubmit={(values) => {
        handleSave(values);
      }}
      className="w-full"
    >
      <Form className="flex flex-col">
        <div className="pt-[20px] pb-[20px] relative  border-solid border-b-[1px] ml-4 mr-4 grid grid-cols-[15%_85%] items-center">
          <p className=" text-[20px] font-semibold  text-header">
            Old password:{""}
          </p>
          <Field
            name="oldpassword"
            className=" w-full border-1 p-[10px] rounded-[10px] opacity-60 border-opacity-60 "
          ></Field>
        </div>
        <div className="pt-[20px] pb-[20px] relative  border-solid border-b-[1px] ml-4 mr-4 grid grid-cols-[15%_85%] items-center">
          <p className=" text-[20px] font-semibold  text-header">
            New password:{""}
          </p>
          <Field
            name="newpassword"
            className=" w-full border-1 p-[10px] rounded-[10px] opacity-60 border-opacity-60 "
          ></Field>
        </div>
        <Button className="w-full bg-primary mt-5" type="submit">
          Save
        </Button>
      </Form>
    </Formik>
  );
};

export default ChangePassword;
