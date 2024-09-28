'use client'

import { Box, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2";
import {
    Call,
    LocationOn,
    QueryBuilder
} from "@mui/icons-material";
import logo from "@/src/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { selectDictionary, selectSystemLanguage } from "@/store/slice/languageSlice";
import { useSelector } from "react-redux";


const Footer1 = () => {

    const dict = useSelector((state) => selectDictionary(state))
    const Language = useSelector((state) => selectSystemLanguage(state))

    return (
        <>
            <Grid container spacing={6}
                sx={{
                    direction: dict.startsWith("en") ? "ltr" : "rtl",
                    mx: "auto", mt: 5,
                    backgroundColor: "black", pb: 5
                }}>
                <Grid size={{ xs: 6, md: 3 }}
                    sx={{ display: "flex", justifyContent: "center" }} >
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                    }}>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <Image src={logo} width={50} style={{
                                marginRight: "-.1rem",
                            }} />
                            <Typography color="warning" sx={{ fontSize: "1.4rem" }}>
                                {Language?.main?.informationCompanyFooter?.title}
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", gap: 2, }}>
                            <LocationOn color="warning" />
                            <Typography color="warning">
                                {Language?.main?.informationCompanyFooter?.address}
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Call color="warning" />
                            <Typography color="warning">
                                0663-123456
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", gap: 2, }}>
                            <QueryBuilder color="warning" />
                            <Typography color="warning">
                                9 - 13
                            </Typography>
                        </Box>
                    </Box>
                </Grid >
                {Language && Language?.main?.informationFooter.map((fd, indexAll) => (
                    <Grid key={indexAll}
                        size={{ xs: 6, md: 3 }}
                        sx={{ display: "flex", justifyContent: "center" }} >
                        <Box sx={{
                            width: "100%", borderRight: "1px solid #ec8d10",
                        }}>
                            <Typography color="white"
                                sx={{ mb: 2, mr: 3, fontSize: "1.7rem" }}>
                                {fd.title}
                            </Typography>
                            {
                                fd && fd.items.map((fi, index) => (
                                    <Typography color="silver" key={index}
                                        sx={{ mt: 1, mr: 3, fontSize: ".9rem" }}>
                                        <Link href={fd.links[index]}
                                            style={{
                                                color: "silver",
                                                textDecoration: "none"
                                            }}>
                                            - &nbsp; &nbsp;{fi}
                                        </Link>
                                    </Typography>
                                ))
                            }
                        </Box>
                    </Grid>
                ))}
            </Grid >
        </>
    )
};

export default Footer1