"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import UserContext from "./usercontext";
import { currentUser } from "@/services/userService";
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function load() {
      try {
        const loggedUser = await currentUser();
        console.log(loggedUser);
        setUser({ ...loggedUser });
      } catch (err) {
        console.log(err);
        toast.error("error in loading current user");
        setUser(undefined);
      }
    }
    load();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
