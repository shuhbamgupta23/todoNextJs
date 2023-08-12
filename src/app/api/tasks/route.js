import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import { getErrorNextResponse } from "@/helper/errorMessage";

export const GET = async (request) => {
  try {
    const tasks = await Task.find();
    return NextResponse.json({ tasks, status: true }, { status: 201 });
  } catch (err) {
    return getErrorNextResponse("Error while fetching tasks!!!", 404, false);
  }
};

export const POST = async (request) => {
  const { title, content, userId } = await request.json();
  try {
    const task = new Task({
      title,
      content,
      userId,
    });
    const createdTask = await task.save();
    return NextResponse.json(
      { createdTask, status: true },
      {
        status: 201,
      }
    );
  } catch (err) {
    return getErrorNextResponse("Error while creating tasks!!!", 404, false);
  }
};
