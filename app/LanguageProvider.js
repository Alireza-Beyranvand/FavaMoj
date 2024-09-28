'use client'

import { fetchLang, setlanguage } from "@/store/slice/languageSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux"



export const LanguageProvider = ({ children, lang }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setlanguage(lang))
        dispatch(fetchLang(lang))
    }, [lang])

    return (
        <div>{children}</div>
    )
}
