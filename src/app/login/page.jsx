"use client";
import React, { useContext, useEffect, useState } from "react";
import LoginSvg from "../../assets/login.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { login } from "@/services/userService";
import { useRouter } from "next/navigation";
import UserContext from "@/context/usercontext";
export const metadata = {
  title: "Login : Work Manager",
};

const Login = () => {
  const router = useRouter();
  const context = useContext(UserContext)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginData.email.trim() === "" || loginData.email === null) {
      toast.error("Invalid Email address", { position: "top-center" });
      return;
    }
    if (loginData.password.trim() === "" || loginData.password === null) {
      toast.error("Invalid Password", { position: "top-center" });
      return;
    }

    try {
      const result = await login(loginData);
      console.log(result);
      toast.success("Login Successful", { position: "top-center" });
      context.setUser(result.user)
      router.push("/profile/user");
    } catch (err) {
      console.log(err);
      toast.error("Error in login", {
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    document.title = metadata.title;
  }, []);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5">
        <div className="py-5"></div>
        <div className="my-8 flex justify-center">
          <Image
            src={LoginSvg}
            style={{
              width: "50%",
              height: "125px",
            }}
            alt="signup banner"
          ></Image>
        </div>
        <h1 className="text-3xl text-center">Login Here</h1>
        <form action="#" onSubmit={(e) => handleSubmit(e)}>
          <div className="mt-3">
            <label
              htmlFor="user_name"
              className="block text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              value={loginData.email}
              onChange={(e) => handleChange(e)}
              name="email"
              type="text"
              className="w-full p-3 rounded bg-gray-800 focus:ring-gray-400-100 border border-gray-800 text-sm font-mediums"
              placeholder="Enter your email address"
            ></input>
          </div>
          <div className="mt-3">
            <label
              htmlFor="user_name"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              onChange={(e) => handleChange(e)}
              value={loginData.password}
              name="password"
              type="text"
              className="w-full p-3 rounded bg-gray-800 focus:ring-gray-400-100 border border-gray-800 text-sm font-mediums"
              placeholder="Enter your password"
            ></input>
          </div>
          <div className="mt-4 flex justify-center">
            <button className="bg-green-600 px-3 py-2 rounded hover:bg-green-800 text-sm font-medium">
              Login
            </button>
            <button className="bg-red-600 px-3 py-2 rounded hover:bg-red-800 ms-3 text-sm font-medium">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
