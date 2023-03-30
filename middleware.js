import { NextResponse } from "next/server";

// There are no pre-defined routes to which this middleware applies
// so, it runs on all routes.

export function middleware(req) {
  // const USERNAME = "user";
  // const PASSWORD = "pass";
  // const UNAUTHENTICATED_URL = "/api/restricted";
  // // If were in the development environment, don't run this code.
  // if (process.env.NODE_ENV !== "development") {
  //   // Pop up the BASIC-AUTH popup
  //   const basicAuth = req.headers.get("authorization");
  //   const url = req.nextUrl;
  //   if (basicAuth) {
  //     // Check the values entered (returned as Base64)
  //     // Looks something like this "Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=="
  //     const authValue = basicAuth.split(" ")[1];
  //     const [user, pwd] = atob(authValue).split(":");
  //     // If the username and password match those below, their request can continue
  //     // on to their desired endpoint
  //     if (user === USERNAME && pwd === PASSWORD) {
  //       return NextResponse.next();
  //     }
  //   }
  //   // If they try to skip the BASIC-AUTH, they get redirected
  //   // to a URL that is unauthenticated.
  //   url.pathname = UNAUTHENTICATED_URL;
  //   return NextResponse.rewrite(url);
  // }
}
