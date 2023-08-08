import { getErrorNextResponse } from "@/helper/errorMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { taskId } = params;
  try {
    const task = await Task.findById(taskId);
    return NextResponse.json(task, { status: 200 });
  } catch (err) {
    return getErrorNextResponse("Error in getting task!!", 404, false);
  }
};

export const PUT = async (request, { params }) => {
  const { taskId } = params;
  try {
    const { title, content, status } = await request.json();
    let task = await Task.findById(taskId);
    task.title = title;
    task.content = content;
    task.status = status;
    const updatedTask = await task.save();
    return NextResponse.json(task);
  } catch (err) {
    return getErrorNextResponse(err, 404, false);
  }
};

export const DELETE = async (request, { params }) => {
  const { taskId } = params;
  try {
    await Task.deleteOne({
      _id: taskId,
    });
    return getErrorNextResponse("Task deleted successfully", 201, true);
  } catch (err) {
    return getErrorNextResponse("Error while deleting a task!!!", 404, false);
  }
};
