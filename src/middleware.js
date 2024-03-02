import { NextResponse, NextRequest } from "next/server";

export function middleware(request) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-pathname", request.nextUrl.pathname);

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}
export const config = {
    matcher: ['/questions/:path*', '/'],
}