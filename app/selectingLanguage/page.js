'use client';

import { fetchLang, setlanguage } from "@/store/slice/languageSlice";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";



export default function selectingLanguage() {

    const dispatch = useDispatch();

    const router = useRouter();
    // set Cookie 
    const setCookie = async (cookie) => {
        try {
            // request
            const request = await fetch("/api/createCookie", {
                method: "POST",
                body: JSON.stringify({ name: "Language", value: cookie })
            });
            // response
            const response = await request.json();
            // the result
            if (request.ok) {
                router.refresh()
                toast.success(`${response.message}`, {
                    style: {
                        borderRadius: '10px',
                        background: '#ec8d10',
                        color: 'black',
                    }
                })
            }
        }
        catch (err) {
            toast.error(err.message)
        }
    }
    return (
        <Box component="div" sx={{
            mt: 25, mx: "auto", width: "80%",
            backgroundColor: "black",
            color: "warning.main",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            alignItems: "center",
            height: "50vh",
            borderRadius: 7,
            boxShadow: 10,
            justifyContent: "center",
            border: "1px solid orange"
        }}>

            <Box component="div">
                <Typography sx={{
                    fontWeight: 800,
                    textShadow: ".5px .5px 1px whitesmoke",
                    fontSize: "3.8vw",
                    textAlign: "center"
                }}>
                    زبان سیستم خود را انتخاب کنید
                </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 8, }}>
                <Button variant="contained" color="warning"
                    sx={{ boxShadow: ".5px .5px 1px 1px orange" }}
                    onClick={() => setCookie("fa")}>
                    <Typography variant="body1" color="black">
                        فارسی
                    </Typography>
                </Button>
                <Button variant="contained" color="warning"
                    onClick={() => setCookie("en-us")}>
                    <Typography variant="body1" color="black"
                        sx={{ color: "black", pt: .5 }}>
                        English
                    </Typography>
                </Button>
            </Box>
        </Box>
    )

}