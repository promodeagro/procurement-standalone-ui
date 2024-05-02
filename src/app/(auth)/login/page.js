"use client";
// import { useRouter } from "next/router";
import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import Logo from "../../../../public/asset/PTRlogo.png";

import Image from "next/image";
// import LoginImage from "../../../public/assets/login/login2.svg";
// import synectiksImage from "../../../public/assets/login/synectiks.svg";
// import welcomeImage from "../../../public/assets/login/hand.jpg";
import { useRouter } from "next/navigation";
// import { setemployeId } from "@/redux/slices/Onboardingpersdetails";
// import Loading from "@/app/loading";

import { useDispatch, useSelector } from "react-redux";

// import axios from "@/api/axios";
// import unionImage from "../../../public/assets/login/Union.svg";

const Page = () => {
  const router = useRouter();
  const [valid, setValid] = useState(true);
  const [emailVerified, setEmailVerified] = useState(true);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateForm(newEmail, password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validateForm(email, newPassword);
  };

  const validateForm = (newEmail, newPassword) => {
    // Email pattern for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Password pattern for validation
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Check if email and password match the specified patterns
    const isEmailValid = emailPattern.test(newEmail);
    const isPasswordValid = passwordPattern.test(newPassword);

    // Enable button only if both email and password are valid
    setIsButtonDisabled(!(isEmailValid && isPasswordValid));
  };

  // const reset = useSelector((state) => state.resetPassword);
  // console.log(reset);

  const setCookie = (name, value, expiresInDays) => {
    const date = new Date();
    date.setTime(date.getTime() + expiresInDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };

  const dispatchfun = (id) => {
    dispatch(setemployeId(id));
  };

  const signinCheck = async (values) => {
    setLoading(true);

    const data = {
      email: values.email,
      password: values.password,
      // {
      //   "email": "user@example.com",
      //   "password": "string@S123"
      // }
    };
    try {
      console.log("data", data.emp_type);
      const response = await axios.post("/signin", data);
      console.log("response", response);

      if (response.status == 200) {
        //getting accesstoken from response
        const accessToken = response.data.AccessToken;

        console.log("hr Id", response.data.Result.id);
        dispatchfun(response.data.Result.id);

        // Set the access token in a cookie
        localStorage.setItem("hrId", response.data.Result.id);
        setCookie("accessToken", accessToken, 1);
        if (response.data.Result.first_name && response.data.Result.number) {
          router.push("/hrms");
        } else {
          router.push("/onboarding");

          // router.push("/hrms");
        }
      } else {
        setValid(false);
      }
    } catch (error) {
      console.log("error", error);
      console.log(error.response?.data?.message);
      console.log(error.request.status);
      if (
        error.request.status == 403 ||
        error.response?.data?.message == "User is not confirmed."
      ) {
        setEmailVerified(false);
        setValid(true);
      } else {
        setValid(false);
        setEmailVerified(true);
      }
    } finally {
      setLoading(false); // Set loading state to false after response or error is received
    }
  };

  const [onBoarded, setOnBoarded] = useState(false);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  // const router = useRouter();

  return (
    <>
      {loading && <Loading />}

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
              <p className="font-bold m-0 p-0 text-xl">Sign in</p>
              {/* <Image
                  src={welcomeImage}
                  className="w-[25px] h-[25px] ml-2 mb-2"
                  alt="welcome"
                /> */}
              <p className="text-gray-400 mb-4 -mt-1 text-sm">
                Enter your email address andpassword to access admin panel
              </p>
            </div>
          </div>

          <Form
            name="normal_login"
            className="login-form w-[80%] ml-5"
            initialValues={{
              remember: true,
            }}
            onFinish={signinCheck}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please Enter your username!",
                },
              ]}
            ><label className="text-[1rem] text-gray-500 font-semibold">Email Address</label>
              <Input
                placeholder="Email"
                onChange={handleEmailChange}
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please Enter your Password!",
                },
              ]}
            ><label className="text-[1rem] text-gray-500 font-semibold">Password</label>
              <Input.Password
                type="password"
                onChange={handlePasswordChange}
                placeholder="Password"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row-reverse text-violet-700">
                  <Link
                    href="/password/reset"
                    className="login-form-forgot text-violet-700"
                  >
                    Forgot password
                  </Link>
                </div>
                {!valid && (
                  <p className="text-red-700">Invalid email or Password</p>
                )}
                {!emailVerified && (
                  <p className="text-red-700">Please Verify your Email First</p>
                )}
              </div>
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
                <Button className="login-form-button bg-violet-700 text-white w-[80%] mx-7">
                  Log in
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </div>
        <div className="z-10 h-20 flex flex-col items-center justify-between">
          <p className="text-gray-400 ">
            Dont have any account{" "}
            <Link href="/signup" className="text-violet-700 cursor-pointer">
              ?sign up
            </Link>
          </p>
          <p className="text-gray-400">
            2025 @-Procurement-PTRtechnologies.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
