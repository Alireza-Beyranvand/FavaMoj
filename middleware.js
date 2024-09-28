import { NextResponse } from "next/server";
import { cookies } from "next/headers";


export default function middleware(request) {

    // has cookie 
    const Cookie = cookies();
    // Cookie and value
    const cookieStore = Cookie.get("Language");
    const LanguageHasCookie = cookieStore?.value

    if (!LanguageHasCookie) {
        return NextResponse.rewrite(
            new URL(
                `selectingLanguage`, request.url
            )
        )
    }
    return;

};

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};