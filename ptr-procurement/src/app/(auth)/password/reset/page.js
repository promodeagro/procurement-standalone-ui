"use client";
import React, { useState } from "react";
import Image from "next/image";
// import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../../../../public/asset/PTRlogo.png";
// import { setEmail } from "@/Context/Slices/resetPasswordSlice";
import Link from "next/link";
import { Button, Form, Input } from "antd";

const Reset = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const reset = useSelector((state) => state.resetPassword);
  console.log(reset);
  const [email, setEmails] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmails(newEmail);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailPattern.test(newEmail);
    setIsButtonDisabled(!isEmailValid);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center relative h-screen w-[100%] ">
        <div className="w-[70vw] h-[115vh]  rounded-[50%] bg-[#e6f7ff6c] z-0  flex justify-center items-center absolute overflow-hidden">
          <div className="w-[60vw] h-[105vh]  rounded-[50%] bg-[#e6f7ffb7] z-0  flex justify-center items-center absolute overflow-hidden"></div>
        </div>
        <div className="md:w-[40%] mt-4 bg-white z-10 flex flex-col items-center">
          <div className="ml-5 mb-14">
            <Image src={Logo} className="w-[150px]" alt="company logo" />
          </div>
          <div>
            <div className="flex flex-col  items-center">
              <p className="font-bold m-0 p-0 text-xl">Forget Password</p>
              {/* <Image
                  src={welcomeImage}
                  className="w-[25px] h-[25px] ml-2 mb-2"
                  alt="welcome"
                /> */}
              <p className="text-gray-400 mb-4 -mt-1 text-sm">
                An email with a link to reset your password will be sent to you.
              </p>
            </div>
          </div>

          <Form
            name="normal_login"
            className="login-form w-[80%] ml-5"
            initialValues={{
              remember: true,
            }}
            // onFinish={signinCheck}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please Enter your username!",
                },
              ]}
            >
              <label className="text-sm text-gray-400">Email Address</label>
              <Input
                placeholder="Email"
                // onChange={handleEmailChange}
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Link href="/main">
                {/* <Button
                type="primary"
                htmlType="submit"
                disabled={isButtonDisabled}
                className="login-form-button bg-blue-500 w-[100%]"
              >
                Log in
              </Button> */}
                <Button className="login-form-button bg-violet-700 w-[80%] mx-7 text-white">
                Next
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </div>
        <div className="z-10 h-20 flex flex-col items-center justify-between">
          <p className="text-gray-400">
            2025 @-Procurement-PTRtechnologies.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Reset;
