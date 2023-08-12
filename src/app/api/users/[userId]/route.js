import { NextResponse } from "next/server";
import { User } from "../../../../models/user";

export const GET = async (request, { params }) => {
  const { userId } = params;
  try {
    const user = await User.findById(userId);
    return NextResponse.json({ user, status: true }, { status: 201 });
  } catch (err) {
    return NextResponse.json({
      message: "Error in getting the user",
      status: false,
    });
  }
};

export const DELETE = async (request, { params }) => {
  const { userId } = params;
  try {
    await User.deleteOne({
      _id: userId,
    });
    return NextResponse.json({
      message: "User Delete Successfully",
      status: true,
    });
  } catch (err) {
    return NextResponse.json({
      message: "Error while deleting user",
      status: false,
    });
  }
};

export const PUT = async (request, { params }) => {
  const { userId } = params;
  const { name, password, about, profileURL } = await request.json();
  try {
    const user = await User.findById(userId);
    user.name = name;
    user.password = password;
    user.about = about;
    user.profileURL = profileURL;
    await user.save();
    return NextResponse.json({ user, status: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: "Error while updating the user !!",
    });
  }
};
