// src/app/api/set-language/route.js  
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
    const Cookie = cookies();

    // ما از request.json() برای استخراج داده‌ها استفاده می‌کنیم  
    const newCookie = await request.json();
    console.log(newCookie);

    if (newCookie?.value) {
        Cookie.set("Language", newCookie.value);  // تنظیم کوکی  
        return NextResponse.json({ status: 200, message: "کوکی ست شد !" });
    } else {
        return NextResponse.json({ status: 400, message: "No value provided" }); // وضعیت مناسب  
    }
}