"use client";
import React, { useState } from "react";
import LoginSvg from "../../assets/login.svg";
import Image from "next/image";

export const metadata = {
  title: "Add Task : Work Manager",
};

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "",
    userId: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
    console.log(task);
  };

  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="col-span-4 col-start-5 p-5 text-3xl">
        <div className="my-8 flex justify-center">
          <Image
            src={LoginSvg}
            style={{
              width: "50%",
            }}
            alt="login"
          ></Image>
        </div>
        <h1 className="text-3xl text-center">Add your task here !!</h1>
        <form action="">
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={(e) => handleChange(e)}
              className="w-full p-3 rounded bg-gray-800 focus:ring-gray-400-100 border border-gray-800 text-sm font-medium"
              id="task_title"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Content
            </label>
            <textarea
              type="text"
              name="content"
              value={task.content}
              onChange={(e) => handleChange(e)}
              className="w-full p-3 rounded bg-gray-800 focus:ring-gray-400-100 border border-gray-800 text-sm font-medium"
              id="task_title"
              rows={5}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="task_status"
              className="block text-sm font-medium mb-2"
            >
              Status
            </label>
            <select
              onChange={(e) => handleChange(e)}
              name="status"
              value={task.status}
              id="task_status"
              className="w-full p-3 rounded bg-gray-800 focus:ring-gray-400-100 border border-gray-800 text-sm font-medium"
            >
              <option value="" disabled>
                ---Select-Status---
              </option>
              <option value="pending" className="text-white">
                Pending
              </option>
              <option value="complete" className="text-white">
                Complete
              </option>
            </select>
          </div>
          <div className="mt-4 flex justify-center">
            <button className="bg-blue-600 px-3 py-2 rounded hover:bg-blue-800 text-sm font-medium">
              Add Todo
            </button>
            <button className="bg-red-600 px-3 py-2 rounded hover:bg-red-800 ms-3 text-sm font-medium">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
