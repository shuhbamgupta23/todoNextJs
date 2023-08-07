import { NextResponse } from "next/server";
export const getErrorNextResponse = (message, statusCode, status) => {
  return NextResponse.json(
    { message: message, success: status },
    { status: statusCode }
  );
};
