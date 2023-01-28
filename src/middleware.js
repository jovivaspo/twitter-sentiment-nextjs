import { NextResponse } from "next/server";
import Cors from "cors";

const host = process.env.NEXT_PUBLIC_HOST;

export const middleware = (req) => {
  if (req.nextUrl.origin !== host)
    return NextResponse.json({ error: "Acceso denegado" }).status(401);
  return NextResponse.next();
};

export const config = {
  matcher: "/api/user/:path*",
};
