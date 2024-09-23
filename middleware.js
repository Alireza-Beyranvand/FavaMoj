import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";



// all language
const Languages = ["en-us", "en", "fa-ir", "fa"];


// set Language from user header

const getLanguage = (request) => {
    const newNegotiator = {};
    request.headers.forEach((value, key) => (newNegotiator[key] = value));
    // get languages
    const getLanguages = new Negotiator({ headers: newNegotiator }).languages();
    console.log(Languages);
    // set default language
    const defaultLanguage = "fa-ir";
    // set Language
    const Language = match(getLanguages, Languages, defaultLanguage);
    return Language;
};


// set middleware



export default function middleware(request) {
    const { pathname } = request.nextUrl;

    // has language in pathname
    const LanguageHasPathname = Languages.some(
        (Language) => pathname.startsWith(`/${Language}`) || pathname === Language
    );

    // has cookie 
    const Cookie = cookies();
    // Cookie and value
    const cookieStore = Cookie.get("Language");
    const LanguageHasCookie = cookieStore?.value

    // auth next token
    const cookieStore2 = Cookie.get("next-auth.session-token");



    // condition redirect
    if (LanguageHasPathname) return;
    else if (!LanguageHasCookie) {
        return NextResponse.redirect(
            new URL(
                `en-us/selectingLanguage`, request.url
            )
        )
    } else if (LanguageHasCookie) {
        return NextResponse.redirect(
            new URL(
                `/${cookieStore.value}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url
            )
        );
    }

};

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};