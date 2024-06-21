import { getCurrentUserToken } from "@/lib/user";
import { NextResponse } from "next/server";

// export function middleware(request) {
//     const currentUser = getCurrentUserToken()

//     console.log({ currentUser })

//     if (currentUser) {
//         // return NextResponse.redirect(new URL('/overview', request.url))
//         return
//     }
//     return NextResponse.redirect(new URL('/auth/login', request.url))
// }

// export const config = {
//     matcher: [
//         '/overview/:path*',
//         '/marketplace/:path*',
//         '/my-offers/:path*',
//         '/sell-fund/:path*',
//         // '/user/:path*',
//         '/wallet-and-bank/:path*',
//         '/create-offer/:path*',
//         '/transaction/:path*'
//     ],
// }

export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/create-offer",
    "/transaction/:path*",
    "/marketplace/:path*",
    "/create-offer/:path*",
  ],
};
