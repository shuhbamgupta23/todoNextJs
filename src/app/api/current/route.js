import { User } from "@/models/user";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/helper/db";
connectDB();
export const GET = async (request) => {
  const authToken = request.cookies.get("authToken")?.value;
  const data = jwt.verify(authToken, process.env.JWT_KEY);

  const user = await User.findById(data._id).select("-password");
  return NextResponse.json(user);
};
