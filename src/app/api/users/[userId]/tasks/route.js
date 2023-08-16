//api/users/[userId]/task
import { getErrorNextResponse } from "@/helper/errorMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import { connectDB } from "@/helper/db";
connectDB();
export const GET = async (request, { params }) => {
  const { userId } = params;
  try {
    const tasks = await Task.find({
      userId: userId,
    });
    return NextResponse.json({ tasks, status: true }, { status: 201 });
  } catch (err) {
    return getErrorNextResponse(
      "Error while fetching task for user",
      404,
      false
    );
  }
};
