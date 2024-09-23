'use client'

import {
    Avatar,
    Box,
    Tooltip,
    Typography,
    useScrollTrigger,
    Zoom,
} from "@mui/material";
import { socialMedia } from "@/src/constants/socialMedia";

import Link from "next/link";

export default function SocialMedia({ Language, dic }) {

    const view = useScrollTrigger({
        threshold: 1,
        disableHysteresis: true,
    })

    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Zoom in={view}
                    direction="right"
                    style={{
                        transitionDelay: "600ms"
                    }} >
                    <Typography color="whitesmoke" sx={{
                        fontSize: {
                            xs: "1.8rem",
                            sm: "3rem"
                        },
                        textShadow: "2px 2px 5px black,-2px -2px 5px black "
                    }} className="text-log">{Language.main.socialMediaTitle}</Typography>
                </Zoom>

                <Box sx={{
                    mt: 5.5, display: "flex", gap: {
                        xs: "1rem",
                        sm: "4rem",
                        md: "5.5rem"
                    }
                }}>
                    {socialMedia && socialMedia.map((sm, index) => (
                        <Box className="lightning-effect">
                            <Tooltip title={sm.name}>
                                <Zoom in={view}
                                    direction="left"
                                    style={{
                                        transitionDelay: `${index + 3}90ms`
                                    }}>
                                    <Avatar
                                        sx={{
                                            width: {
                                                xs: "6.5vh",
                                                md: '7.5vh'
                                            },
                                            height: {
                                                xs: "6.5vh",
                                                md: '7.5vh'
                                            },
                                            backgroundColor: `${sm.color}.main`,
                                            boxShadow: 10
                                        }} >
                                        <Link href={sm.url} >
                                            {sm.icon}
                                        </Link>
                                    </Avatar>
                                </Zoom>
                            </Tooltip>
                        </Box>
                    ))}
                </Box>
            </Box >

        </>
    )
}