import { NextResponse } from "next/server";
import { connectDB } from "@/helper/db";
import { User } from "../../../models/user";
connectDB();

export const GET = async (request) => {
  let users = [];
  try {
    users = await User.find().select("-password");
    return NextResponse.json(users, { status: 201 });
  } catch (err) {
    return NextResponse.json({
      message: err,
      status: false,
    });
  }
};

export const POST = async (request) => {
  try {
    const { name, email, password, about, profileURL } = await request.json();
    const user = new User({
      name,
      email,
      password,
      about,
      profileURL,
    });
    const createdUser = await user.save();
    return NextResponse.json(user, {
      status: 201,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: "Failed to create user !!",
      status: false,
    });
  }
};

export const DELETE = () => {};

export const PUT = () => {};
