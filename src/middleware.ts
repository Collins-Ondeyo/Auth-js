import NextAuth from "next-auth";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);

const routes = {
    auth: ["/signin", "/signup"],
    private: ['/settings'],
    home: "/",
}





export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isPrivateRoute = routes.private.includes(nextUrl.pathname);
    const isAuthRoute = routes.auth.includes(nextUrl.pathname);

    if (isAuthRoute && isLoggedIn) {
        return Response.redirect(new URL("/settings", nextUrl));
    }

    if (isPrivateRoute && !isLoggedIn) {
        return Response.redirect(new URL("/signin", nextUrl));
    }
})

export const config = {
    matcher:["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
}