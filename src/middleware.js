import { NextResponse } from "next/server";

const host = process.env.NEXT_PUBLIC_HOST;

export const middleware = (req) => {
  if (req.nextUrl.origin !== host)
    return new NextResponse(JSON.stringify({ error: "Permiso denegado" }), {
      status: 401,
      headers: { "content-type": "application/json" },
    });
  return NextResponse.next();
};

export const config = {
  matcher: "/api/user/:path*",
};
