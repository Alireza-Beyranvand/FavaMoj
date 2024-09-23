'use client';


import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import { Box, Button, Divider, Fab, TextField, Typography } from "@mui/material";
import Link from "next/link";
import Grid from "@mui/material/Grid2";
import Image from "next/image";


import bg from "@/src/assets/background.jpg";
import { GitHub } from "@mui/icons-material";



export default function login() {

    const pathname = usePathname();
    const pathRedirect = pathname.startsWith("/fa") ? "/fa" : "/en-us";

    const router = useRouter();
    const searchParams = useSearchParams();

    const callbackUrl = searchParams.get("callbackUrl") || pathRedirect;
    const [error, setError] = useState("");


    const username = useRef("");
    const password = useRef("");


    const onSubmit = async (e) => {
        e.preventDefault();

        try {

            const result = await signIn("credentials", {
                username: username.current,
                password: password.current,
                redirect: false,
                callbackUrl,
            })
            if (!result?.error) {
                router.push(callbackUrl)
            }
            else {
                setError("نام کاربری یا رمز عبور اشتیاه است")
            }

        } catch (err) {
            setError(err);
        }
    }


    return (

        <>
            <Grid container sx={{
                width: "65vw",
                height: "60vh",
                mx: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
                color: "warning.main",
                textAlign: "center",
                borderRadius: 12,
                boxShadow: 10,
                border: "1px solid orange"
            }}>
                <Grid size={{ xs: 0, lg: 5 }} sx={{ display: { xs: "none", lg: "block" } }}>
                    <Image src={bg} style={{
                        width: "28vw", height: "59.5vh",
                        display: "flex",
                        borderRadius: "3rem 1rem 1rem 3rem"
                    }} />
                </Grid>
                <Grid size={{ xs: 12, md: 7 }} sx={{
                    display: "flex", justifyContent: {
                        xs: "center", md: "center"
                    }
                }}>
                    <Box sx={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        gap: 3.7
                    }}>
                        <Box sx={{ pt: 2 }}>
                            <Typography variant="h4">
                                فاوا موج
                            </Typography>
                        </Box>
                        <form onSubmit={onSubmit}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "2rem",
                            }}>
                            <Box sx={{ display: "flex", gap: 2 }}>
                                <TextField
                                    required
                                    size="small"
                                    onChange={(e) => username.current = e.target.value}
                                    error={error}
                                    id="filled-error-helper-text"
                                    helperText={error && "نام کاربری را درست وارد کنید"}
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            color: 'warning.main' // تغییر رنگ متن  
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'orange' // تغییر رنگ کادر  
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'orange' // تغییر رنگ کادر در حالت hover  
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'orange' // تغییر رنگ کادر در حالت focused  
                                            },
                                        },
                                    }}
                                />
                                <Typography variant="body1" sx={{ my: "auto" }}>
                                    :  نام کاربری
                                </Typography>
                            </Box>

                            <Box sx={{ display: "flex", gap: 2 }}>
                                <TextField
                                    required
                                    size="small"
                                    onChange={(e) => password.current = e.target.value}
                                    error={error}
                                    id="filled-error-helper-text"
                                    helperText={error && "کلمه عبور را درست وارد کنید"}
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            color: 'warning.main' // تغییر رنگ متن  
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'orange' // تغییر رنگ کادر  
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'orange' // تغییر رنگ کادر در حالت hover  
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'orange' // تغییر رنگ کادر در حالت focused  
                                            },
                                        }
                                    }}
                                />
                                <Typography sx={{ my: "auto" }}>
                                    : کلمه عبور
                                </Typography>
                            </Box>
                            <Box>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="warning"
                                    sx={{ width: 1 }}>
                                    <Typography color="black" variant="body1">
                                        ورود
                                    </Typography>
                                </Button>
                            </Box>
                        </form>
                        <Box>
                            <Link href={"#"} style={{ color: "orange" }}>
                                اکانت نداری ؟ ثبت نام کن
                            </Link>
                        </Box>
                        <Divider sx={{
                            "&::before , &::after": {
                                borderColor: "orange",
                            },
                        }}>
                            یا
                        </Divider>
                        <Box sx={{ display: "flex", justifyContent: "space-evenly", }}>
                            <Fab size="small" color="warning">
                                <Typography color="black" variant="body1">
                                    <GitHub sx={{ verticalAlign: "middle" }} />
                                </Typography>
                            </Fab>
                            <Fab size="small" color="warning">
                                <Typography color="black" variant="body1">
                                    <GitHub sx={{ verticalAlign: "middle" }} />
                                </Typography>
                            </Fab>
                            <Fab size="small" color="warning">
                                <Typography color="black" variant="body1">
                                    <GitHub sx={{ verticalAlign: "middle" }} />
                                </Typography>
                            </Fab>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}