import { jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";
import { TTokenUser } from "./redux/features/auth/authSlice";
import { userRole } from "./constants/global";

export function middleware(request: NextRequest) {
  //const token = localStorage.getItem("accessToken");
  //console.log(token);
  //if (!token) {
  //  return NextResponse.redirect(new URL("/signin", request.url));
  //}
  //const user = jwtDecode(token) as TTokenUser;
  //if ((user && user.role === userRole.admin) || user?.role === userRole.superAdmin) {
  //  return NextResponse.next();
  //} else {
  //  return NextResponse.redirect(new URL("/signin", request.url));
  //}
}

export const config = {
  matcher: "/dashboard/:path*",
};
