'use client';


import { Provider } from "react-redux";
import { store } from "./store";
import { useRef } from "react";


export const StoreProvider = ({ children }) => {

    const storeRef = useRef(null);
    if (!storeRef.current) {
        storeRef.current = store()
    }

    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )
}