/* import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
let logged: string | null;
function gettoken(): string | null {
  if (typeof window !== "undefined") {
    logged = localStorage.getItem("loggedUser");
    return logged;
  }
  return null;
}

export function middleware(request: NextRequest) {
  if (gettoken() != null) {
    console.log(logged, "if");

    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    console.log(logged, "else");

    return NextResponse.next();
  }
}
export const config = {
  matcher: ["/profile", "/"],
};

/*   return NextResponse.next();
  /* if (!localStorage.getItem("loggedUser")) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    return NextResponse.next();
  } */

/* export const config = {
  matcher: "/profile/:path*",
}; */
