import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const POST = async (request) => {
  const { email, password } = await request.json();
  try {
    const user = await User.findOne({
      email: email,
    });
    if (user === null) {
      throw new Error("User not found!!!");
    }
    if (!bycrypt.compareSync(password, user.password)) {
      throw new Error("Password do not match");
    }
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );
    const response = NextResponse.json({
      message: "Login successful",
      status: true,
    });

    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });
    return response;
  } catch (error) {
    return NextResponse.json(
      { message: error.message, success: false },
      { status: 500 }
    );
  }
};
