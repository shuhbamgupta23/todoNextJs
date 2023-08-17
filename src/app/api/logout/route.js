import { NextResponse } from "next/server";

export const POST = async (request) => {
  const response = NextResponse.json({
    message: "Logged out!!",
    success: true,
  });

  response.cookies.set("authToken", "", {
    expires: new Date(0),
  });

  return response;
};


