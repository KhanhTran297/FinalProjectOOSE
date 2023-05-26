import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input } from "antd";
import { useMutation } from "react-query";
import useMyToast from "@/hook/useMyToast";
import { checkOtpApi, createNewPasswordApi, sentOtpApi } from "@/api/account";
const ForgotPassword = (props) => {
  //hook
  const [toggleOtp, setToggleOtp] = useState(false);
  const [toggleCreateNewPass, setToggleCreateNewPass] = useState(false);
  const [nameButton, setNameButton] = useState("Send otp");
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
  const { useSuccess, useError } = useMyToast();
  //variables
  //method
  const onFinish = (value) => {
    if (toggleOtp == false) {
      sendOtp(value);
      setUserEmail((state) => (state = value?.email));
    } else if (toggleCreateNewPass == false) {
      checkOtp(value);
    } else {
      console.log("userEmail", userEmail);
      const newValue = { email: userEmail, newPassword: value?.newPassword };
      createNewPassword(newValue);
    }
  };
  //send Otp
  const { mutate: sendOtp, data: datasendOtp } = useMutation({
    mutationFn: sentOtpApi,
    onSuccess: (data) => {
      {
        if (data.result == true) {
          setToggleOtp((state) => (state = true));
          setNameButton((state) => (state = "Check otp"));
        } else {
          useError("Email doesn't exist");
        }
      }
    },
    onError: () => {
      return false;
    },
  });
  //Check Otp
  const { mutate: checkOtp } = useMutation({
    mutationFn: checkOtpApi,
    onSuccess: () => {
      useSuccess("Check otp success");
      setToggleCreateNewPass((state) => (state = true));
      setNameButton((state) => (state = "Create new password"));
    },
    onError: () => {
      useError("Check otp fail");
    },
  });
  //Create newPassword
  const { mutate: createNewPassword } = useMutation({
    mutationFn: createNewPasswordApi,
    onSuccess: () => {
      useSuccess("Create success");
      navigate("/login");
    },
    onError: () => {},
  });
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        {toggleCreateNewPass ? (
          <div className="">
            <Form.Item
              label="New password"
              name="newPassword"
              rules={[
                { required: true, message: "Please input your newPassword!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Confirm new password"
              name="confirmNewPass"
              rules={[
                { required: true, message: "Please confirm your newPassword!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </div>
        ) : toggleOtp ? (
          <Form.Item
            label="Otp"
            name="otp"
            rules={[{ required: true, message: "Please input your otp" }]}
          >
            <Input />
          </Form.Item>
        ) : (
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
        )}
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="default" htmlType="submit">
            {nameButton}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgotPassword;
