import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      success: true,
      message: "Logout successfully",
    });

    response.cookies.delete("accessToken");
    response.cookies.delete("refreshToken");
    return response;
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Logout failed",
    });
  }
}
