import { withIronSessionApiRoute } from "iron-session/next";
import { withIronSessionSsr } from "iron-session/next";

// Your session options
export const sessionOptions = {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: "session_token_key",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
};

// Helper to wrap API route
export function withSessionRoute(handler) {
    return withIronSessionApiRoute(handler, sessionOptions);
}

// Helper to wrap getServerSideProps
export function withSessionSsr(handler) {
    return withIronSessionSsr(handler, sessionOptions);
}