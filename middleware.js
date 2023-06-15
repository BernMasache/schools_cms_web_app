// middleware.ts
import { NextResponse } from "next/server";
import useCrypto from "./services/cryptoJs";

const cryptoService = new useCrypto();

export async function middleware(request, response) {
  var tokenRaw = request.cookies.get("G-APTVU");
  if (tokenRaw == undefined || tokenRaw == null || tokenRaw == "") {
    if (request.nextUrl.pathname == "/") {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  } else {
    var token = JSON.parse(cryptoService.decrypt(tokenRaw.value)).token;
    //admin
    if (token == null && request.nextUrl.pathname == "/admin") {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
    // // //admin
    if (token != null && request.nextUrl.pathname == "/") {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    // //admin
    if (request.nextUrl.pathname == "/signin") {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }
}