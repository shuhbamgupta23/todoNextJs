"use client";
import Link from "next/link";
import React from "react";

const CustomNavbar = () => {
  return (
    <nav class="bg-blue-600 h-16 py-2 px-5 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl font-semibold">
          <Link href="/">Work Manager</Link>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/add-task">Add Task</Link>
          </li>
          <li>
            <Link href="#">Show Tasks</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
