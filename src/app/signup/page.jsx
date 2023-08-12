"use client";
import React, { useEffect, useState } from "react";
import SignUpSvg from "../../assets/signup.svg";
import Image from "next/image";

import { toast } from "react-toastify";
import axios from "axios";
export const metadata = {
  title: "Signup : Work Manager",
};

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL:
      "https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=170667a&w=0&k=20&c=m-F9Doa2ecNYEEjeplkFCmZBlc5tm1pl1F7cBCh9ZzM=",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const clearUser = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL:
        "https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=170667a&w=0&k=20&c=m-F9Doa2ecNYEEjeplkFCmZBlc5tm1pl1F7cBCh9ZzM=",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.name.trim() === "" || user.name == null) {
      toast.warning("Name is required", { position: "top-center" });
      return;
    }
    try {
      const result = await axios.post("http://localhost:3000/api/users", user);
      const data = result.data;
      if (data.status === false) {
        throw new Error();
      }
      console.log(data);
      toast.success("Sign Up successful", { position: "top-right" });
    } catch (err) {
      console.log(err);
      toast.error("Sign Up failed", { position: "top-right" });
    }
    clearUser();
  };

  useEffect(() => {
    document.title = metadata.title;
  }, []);
  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="col-span-4 col-start-5">
        <div className="py-5">
          <div className="my-8 flex justify-center">
            <Image
              src={SignUpSvg}
              style={{
                width: "50%",
                height: "125px",
              }}
              alt="signup banner"
            ></Image>
          </div>
          <h1 className="text-3xl text-center">Sign Up Here</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mt-3">
              <label
                htmlFor="user_name"
                className="block text-sm font-medium mb-2"
              >
                Full Name
              </label>
              <input
                onChange={(e) => handleChange(e)}
                value={user.name}
                name="name"
                type="text"
                className="w-full p-3 rounded bg-gray-800 focus:ring-gray-400-100 border border-gray-800 text-sm font-mediums"
                placeholder="Enter your full name"
              ></input>
            </div>
            <div className="mt-3">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                className="w-full p-3 rounded bg-gray-800 focus:ring-gray-400-100 border border-gray-800 text-sm font-mediums"
                placeholder="Enter your email"
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <div className="mt-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                onChange={(e) => handleChange(e)}
                type="password"
                name="password"
                value={user.password}
                className="w-full p-3 rounded bg-gray-800 focus:ring-gray-400-100 border border-gray-800 text-sm font-mediums"
                placeholder="Enter your password"
              ></input>
            </div>
            <div className="mt-3">
              <label htmlFor="about" className="block text-sm font-medium mb-2">
                About
              </label>
              <textarea
                rows={5}
                onChange={(e) => handleChange(e)}
                type="text"
                name="about"
                value={user.about}
                className="w-full p-3 rounded bg-gray-800 focus:ring-gray-400-100 border border-gray-800 text-sm font-mediums"
                placeholder="Tell us something about yourself"
              ></textarea>
            </div>
            <div className="mt-4 flex justify-center">
              <button className="bg-green-600 px-3 py-2 rounded hover:bg-green-800 text-sm font-medium">
                Sign Up
              </button>
              <button
                className="bg-red-600 px-3 py-2 rounded hover:bg-red-800 ms-3 text-sm font-medium"
                onClick={clearUser}
              >
                reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
