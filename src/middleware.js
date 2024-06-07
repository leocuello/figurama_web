import { NextResponse } from 'next/server';
import { isJwtExpired } from 'jwt-check-expiration';
export async function middleware(request) {

    let hasCookies = request.cookies.has('token')
    if(hasCookies){
        let cookie = request.cookies.get('token')
        if(!isJwtExpired(cookie.value))
            return NextResponse.next();
        return NextResponse.redirect(new URL('/login', request.url))

    }
    else{
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|public|login|_next/image|favicon.ico).*)',
    ],
}